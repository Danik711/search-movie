import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, NativeSyntheticEvent, TextInputSubmitEditingEventData, BackHandler, FlatList, KeyboardAvoidingView, Platform, Keyboard } from "react-native";

// components
import PageHeader from "../components/page-header";

// types
import { MovieType } from "../helpers/types";
import { MoviesHomeScreenNavType } from "../navigation/navigation-types";

// helpers
import alert from "../components/alert";
import { textsInApp } from "../../assets/textInApps";
import { EXTRA_MOVIES } from "../helpers/constants";

// styles
import { colors } from "../../assets/colors";
import { app_dimensions } from "../../assets/dimensions";

// icons
import SearchIcon from "../../assets/icons/search-icon";

// components
import Button from "../components/ui/button";
import MovieItem from "../components/movie-item";
import LoadingData from "../components/loading-data";
import InputField from "../components/ui/input-field";

// redux
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setMovieSearch, setMovies } from "../redux/reducers/movies-reducer";
import { movieSearchApi } from "../redux/reducers/apis/search-by-name-reducer";

export default function MoviesHomeScreen({ navigation }: MoviesHomeScreenNavType) {
    // bbolean that controls a button. Sets it off or on
    const [disabled, setDisabled] = useState(false);

    const dispatch = useAppDispatch();

    // redux varaible that holds movies
    const reduxMovies = useAppSelector((state) => state.movies.reduxMovies);

    // redux varaible that holds movie name/keyword to seach for movies
    const reduxMovieSearch = useAppSelector((state) => state.movies.movieSeachData);

    // boolean that says if an api is being called 
    const isLoading = useAppSelector((state) => state.searchByName.isLoading);

    useEffect(() => {
        // Set Android back button
        const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            BackHandler.exitApp()
            return true;
        });

        // Get initial 10 movies
        searchMovies(true);

        return () => backHandler.remove();
    }, []);

    // Function for a keyboard when users press on a returnKeyType 
    function onSubmitSearch(e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) {
        searchMovies(false);
    }

    // API returns at most 8 movies all the time.
    // I did not want to call api twice and I decided 
    // to create a constant with some of my favorite movies.
    // The function gets 2 random movies.
    function selectTwoRandomMovies() {
        const randomMovies: MovieType[] = [];

        // Copy of the array
        const auxExtraMovies = [...EXTRA_MOVIES];

        // Get two movies
        for(let i = 0; i < 2; i++) {
            // Get index
            const randIndex = Math.floor(Math.random() * auxExtraMovies.length);
            
            // Push a movie
            randomMovies.push(EXTRA_MOVIES[randIndex]);

            // Removed the selected movie
            auxExtraMovies.splice(randIndex, 1);
        }

        return randomMovies;
    }

    async function searchMovies(initialCall: boolean) {
        // Disabled button
        setDisabled(true);
        if(Keyboard.isVisible())
            Keyboard.dismiss();

        try {
            // Get movies
            const res = await dispatch(
                movieSearchApi({
                    searchVal: initialCall ? "space" : reduxMovieSearch
                })
            ).unwrap();
            let movies: MovieType[] = [];
            
            // If initial call get 10 movies
            if(initialCall)
                movies = res.description.concat(selectTwoRandomMovies());
            // Get only 8 movies
            else
                movies = res.description;

            // set movies in redux
            dispatch(setMovies(movies));

            //reset search string
            dispatch(setMovieSearch(""));
            
            // enable button
            setDisabled(false);
        } catch(error: any) {
            // enable button
            setDisabled(false);
            alert(textsInApp["eng"].popup_error, textsInApp["eng"].errorMessages.defaultBackendError);
        }
    }

    function navigateToMovieDetails(id: string) {
       navigation.navigate("MovieDetails", { imdb_id: id });
    }

    // Function that renders movies in the flatlist
    function renderMovieItem(movie: MovieType) {
        return (
        <MovieItem 
            year={movie.year}
            title={movie.title}
            actors={movie.actors}
            photo={movie.img_poster}
            containerStyle={styles.movieItemStyle}
            onPress={() => navigateToMovieDetails(movie.imdb_id)}
        />
        );
    }

    // Function that renders a flatlist
    function renderMovies() {
        return (
            <FlatList 
                data={reduxMovies}
                keyboardDismissMode={"interactive"}
                keyboardShouldPersistTaps={"handled"}
                renderItem={({ item, index }) => renderMovieItem(item)}
            />
        );
    }

    return (
        <SafeAreaView
            style={styles.mainWrapper}
        >
            <StatusBar 
                barStyle={"dark-content"}
                backgroundColor={colors.backgroundWhite}
            />

            <PageHeader 
                showBackButton={false}
                title={textsInApp["eng"].searchMovies}
            />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                {...(Platform.OS === "ios" ?
                {
                    behavior: "padding" ,
                }
                : {})}
            >
                <View
                    style={styles.uiWrapper}
                >
                    <InputField 
                        value={reduxMovieSearch}
                        returnKeyType={"search"}
                        onSubmit={onSubmitSearch}
                        rightIcon={<SearchIcon />}
                        lable={textsInApp["eng"].movieName}
                        inputMainWrapperStyle={styles.inputStyle}
                        placeholder={textsInApp["eng"].moviePlaceholder}
                        onChangeText={(text) => dispatch(setMovieSearch(text))}
                    />
                    {
                        reduxMovies.length > 0 ?
                        renderMovies()
                        :
                        <LoadingData 
                            text={textsInApp["eng"].fetchingMovies}
                        />
                    }
                </View>
                <View
                    style={styles.buttonWrapper}
                >
                    <Button
                        isLoading={isLoading}
                        onPress={() => searchMovies(false)}
                        buttonStyle={{ alignSelf: "flex-end" }}
                        buttonText={textsInApp["eng"].searchMovies}
                        disabled={!(reduxMovieSearch.length > 0) || disabled}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: colors.backgroundWhite
    },
    uiWrapper: {
        flex: 1,
        marginTop: app_dimensions.dim24,
        marginHorizontal: app_dimensions.dim16
    },
    buttonWrapper: {
        flex: 0,
        width: "100%",
        marginTop: app_dimensions.dim12,
        paddingVertical: app_dimensions.dim12,
        backgroundColor: colors.backgroundWhite,
        paddingHorizontal: app_dimensions.dim16,
        shadowOpacity: 0.10,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowColor: '#000000',
        elevation: 4,
    },
    inputStyle: {
        marginBottom: app_dimensions.dim12
    },
    movieItemStyle: {
        marginBottom: app_dimensions.dim12
    }
});