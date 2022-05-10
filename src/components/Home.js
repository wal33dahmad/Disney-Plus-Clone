import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    const colRef = collection(db, "movies");
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(recommends);
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;

            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;

            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;

            case "trending":
              trendings = [...trendings, { id: doc.id, ...doc.data() }];
              break;

            default:
              console.log("No data found in db");
              break;
          }
        });
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trendings,
          })
        );
      })
      .catch((err) => console.log(err));
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  position: relative;
  top: 72px;
  overflow-x: hidden;

  &::after {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
