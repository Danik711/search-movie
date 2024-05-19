import { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, View, NativeSyntheticEvent, TextInputSubmitEditingEventData, BackHandler, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";

// components
import PageHeader from "../components/page-header";

// types
import { MovieType } from "../helpers/types";
import { MoviesHomeScreenNavType } from "../navigation/navigation-types";

// helpers
import { textsInApp } from "../../assets/textInApps";
import { EXTRA_MOVIES } from "../helpers/constants";

// styles
import { colors } from "../../assets/colors";
import { textStyles } from "../../assets/texts";
import { app_dimensions } from "../../assets/dimensions";

// icons
import SearchIcon from "../../assets/icons/search-icon";

// components
import Button from "../components/ui/button";
import MovieItem from "../components/movie-item";
import InputField from "../components/ui/input-field";

// redux
import { setMovies } from "../redux/reducers/movies-reducer";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { movieSearchApi } from "../redux/reducers/apis/search-by-name-reducer";

export default function MoviesHomeScreen({ navigation }: MoviesHomeScreenNavType) {
    // bbolean that controls a button. Sets it off or on
    const [disabled, setDisabled] = useState(false);

    // Text holds the names/keywords to search for movies
    const [movieSearch, setMovieSearch] = useState("");

    const dispatch = useAppDispatch();

    // redux varaible that holds movies
    const reduxMovies = useAppSelector((state) => state.movies.reduxMovies);

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
        try {
            // Get movies
            const res = await dispatch(
                movieSearchApi({
                    searchVal: initialCall ? "space" : movieSearch
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

            // enable button
            setDisabled(false);
        } catch(error: any) {
            // enable button
            setDisabled(false);
        }
    }

    // Function that renders movies in the flatlist
    function renderMovieItem(movie: MovieType) {
        return (
           <MovieItem 
                onPress={() => {}}
                year={movie.year}
                title={movie.title}
                actors={movie.actors}
                photo={movie.img_poster}
                containerStyle={styles.movieItemStyle}
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
        )
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
                        value={movieSearch}
                        returnKeyType={"search"}
                        onSubmit={onSubmitSearch}
                        rightIcon={<SearchIcon />}
                        lable={textsInApp["eng"].movieName}
                        inputMainWrapperStyle={styles.inputStyle}
                        onChangeText={(text) => setMovieSearch(text)}
                        placeholder={textsInApp["eng"].moviePlaceholder}
                    />
                    {
                        reduxMovies.length > 0 ?
                        renderMovies()
                        :
                        <View
                            style={styles.emptyMoviesWrapper}
                        >
                            <Text
                                style={[textStyles.h4_18, { marginBottom: app_dimensions.dim8, color: colors.neutralBlack, textAlign: "center" }]}
                            >
                                {textsInApp["eng"].fetchingMovies}
                            </Text>
                            <ActivityIndicator 
                                size={"large"}
                                color={colors.primaryHundred}
                            />
                        </View>
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
                        disabled={!(movieSearch.length > 0) || disabled}
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
    emptyMoviesWrapper: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    inputStyle: {
        marginBottom: app_dimensions.dim12
    },
    movieItemStyle: {
        marginBottom: app_dimensions.dim12
    }
});