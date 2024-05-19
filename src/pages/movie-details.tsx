import { useEffect } from "react";
import FastImage from "react-native-fast-image";
import { BackHandler, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// styles
import { colors } from "../../assets/colors";
import { app_dimensions } from "../../assets/dimensions";

// redux
import { selectMovie } from "../redux/reducers/movies-reducer";
import { useAppDispatch, useAppSelector } from "../redux/store";

// types
import { MovieDetailScreenNavType } from "../navigation/navigation-types";
import { getMovieDetialsApi } from "../redux/reducers/apis/get-movie-details-reducer";

// components
import ActorView from "../components/actor-view";
import PageHeader from "../components/page-header";
import LoadingData from "../components/loading-data";

// helpers
import alert from "../components/alert";
import { textStyles } from "../../assets/texts";
import { textsInApp } from "../../assets/textInApps";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function MovieDetails({ navigation, route }: MovieDetailScreenNavType) {
    const { imdb_id } = route.params;

    const dispatch = useAppDispatch();
    const movieData = useAppSelector((state) => state.movies.selectedMovie);
    const isLoading = useAppSelector((state) => state.movieDetails.isLoading);

    useEffect(() => {
        // Set Android back button
        const backHandler = BackHandler.addEventListener("hardwareBackPress", onAndroidBackButtonPress);

        getMovieDetails();

        return () => backHandler.remove();
    }, []);

    function onAndroidBackButtonPress() {
        navigation.pop();
        return true;
    }

    function onSoftwareBackButtonPress() {
        navigation.pop();
    }

    // function that makes api call to get more 
    // details about a movie
    async function getMovieDetails() {
        try {
            const res = await dispatch(
                getMovieDetialsApi({
                    imdb_id: imdb_id
                })
            ).unwrap();
            dispatch(selectMovie(res.movieDetails));
        } catch(error: any) {
            alert(textsInApp["eng"].popup_error, 
            textsInApp["eng"].errorMessages.defaultBackendError, 
            onSoftwareBackButtonPress);
        }
    }

    // function says if redux data is valid
    // to avoid errors
    function isMovieDataValid() {
        return (
            movieData.name.length > 0 &&
            movieData.description.length > 0 &&
            movieData.image.length > 0 &&
            movieData.keywords.length > 0
        );
    }

    // function renders all details about a movie
    function renderMovieDetails() {
        return (
            <>            
                <View
                    style={styles.moviePresenterWrapper}
                >
                    <FastImage 
                        style={styles.imageStyle}
                        source={{uri: movieData.image}}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                    <View
                        style={styles.textDataWrapper}
                    >
                        <Text
                            style={[textStyles.button_16, { color: colors.neutralBlack }]}
                        >
                            {movieData.name}
                        </Text>
                        <Text
                            style={[textStyles.p3_14, { color: colors.neutral3, marginTop: app_dimensions.dim8 }]}
                        >
                            {textsInApp["eng"].keywords}: {movieData.keywords}
                        </Text>
                    </View>
                </View>

                <Text
                    style={[textStyles.p3_14, { color: colors.neutralBlack, marginTop: app_dimensions.dim12 }]}
                >
                    {movieData.description}
                </Text>

                <Text
                    style={[textStyles.button_16, { color: colors.neutralBlack, marginTop: app_dimensions.dim12 }]}
                >
                    {textsInApp["eng"].actors}
                </Text>

                {
                    movieData.actors && movieData.actors.length > 0 &&
                    movieData.actors.map((actor, index) => {
                        return (
                            <ActorView 
                                key={index}
                                name={actor.name}
                                photo={actor.photo}
                                containerStyle={styles.actorViewStyle}
                            />
                        );
                    })
                }
                {
                    movieData.review && 
                    movieData.review.author.length > 0 && 
                    movieData.review.comment.length > 0 &&
                    <>
                        <Text
                            style={[textStyles.button_16, { color: colors.neutralBlack, marginTop: app_dimensions.dim12 }]}
                        >
                            {textsInApp["eng"].featuredReview}
                        </Text>
                        <View>
                            <Text
                                style={[textStyles.button_12, { color: colors.neutralBlack, marginTop: app_dimensions.dim8 }]}
                            >
                                {movieData.review.author}
                            </Text>
                            <Text
                                style={[textStyles.p4_12, { color: colors.neutral3, textAlign: "justify", marginTop: app_dimensions.dim4 }]}
                            >
                                {movieData.review.comment}
                            </Text>
                        </View>

                    </>
                }
            </>
        );
    }

    return (
        <SafeAreaView
            style={styles.mainWrapper}
        >
            <PageHeader 
                title={textsInApp["eng"].movieDetails}
                onBackButtonPress={onSoftwareBackButtonPress}
            />
            <KeyboardAwareScrollView
                keyboardDismissMode={"interactive"}
                keyboardShouldPersistTaps={"handled"}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View
                    style={styles.uiWrapper}
                >
                    {
                        isLoading || !isMovieDataValid() ?
                        <LoadingData
                            text={textsInApp["eng"].fetchingMovieData}
                        />
                        :
                        renderMovieDetails()
                    }
                </View>
            </KeyboardAwareScrollView>
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
        marginVertical: app_dimensions.dim24,
        marginHorizontal: app_dimensions.dim16
    },
    actorViewStyle: {
        marginTop: app_dimensions.dim16
    },
    moviePresenterWrapper: {
        flexDirection: "row"
    },
    imageStyle: {
        height: hp("20%"),
        alignSelf: "flex-start",
        width: hp("100%") < 600 ? "23%" : "30%",
    },
    textDataWrapper: {
        flex: 1,
        flexDirection: "column",
        marginStart: app_dimensions.dim6,
    }
});