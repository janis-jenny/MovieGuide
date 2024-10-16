import PropTypes from 'prop-types';
import {
  Grid, Box, Image, ScaleFade, Text,
} from '@chakra-ui/react';
import heart from '../../images/heart.png';
import star from '../../images/star.png';
import list from '../../images/list.png';
import tag from '../../images/tag.png';

const CardDetails = ({
  id, name, img, loading, popularity, genres,
  time, tagline, overview, status, firstDate, episodes, seasons,
}) => (
  <ScaleFade
    initialScale={0.9}
    in={!loading}
  >
    <Box
      w="100%"
      key={id}
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={20}
      >
        <Box display="flex" alignItems="start" px="65" mt="25">
          <Image src={img} alt="poster" w="55%" h="auto" />
        </Box>
        <Box>
          <Box textAlign="center" mt="25">
            <Text textAlign="center" fontSize="lg" fontWeight="bolder">
              {name}
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Text textAlign="center" fontSize="lg" fontWeight="normal" px="35">
              {genres.map((item) => `  ${item.name}  `)}
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center" mx="10">
              <Text textAlign="center" fontSize="lg" fontWeight="bold">
                {`${popularity * 10}%`}
              </Text>
              <Box display="flex" flexDirection="column" px="35">
                <Text textAlign="center" fontSize="lg" fontWeight="bold">
                  User
                </Text>
                <Text textAlign="center" fontSize="lg" fontWeight="bold">
                  Score
                </Text>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mx="5">
              <Image src={list} alt="list icon" w="9%" mx="9" />
              <Image src={heart} alt="heart icon" w="9%" mx="9" />
              <Image src={tag} alt="tag icon" w="9%" mx="9" />
              <Image src={star} alt="star icon" w="9%" mx="9" />
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Text textAlign="center" fontSize="lg" fontWeight="medium" as="em">
              {tagline}
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="lg" fontWeight="bold" mt="25" px="6">
              Overview
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="normal" mx="20">
              {overview}
            </Text>
          </Box>
          <Box display="flex" justifyContent="center" mt="20">
            <Box px="12">
              <Text textAlign="center" fontSize="lg" fontWeight="bold">
                Status
              </Text>
              <Text textAlign="center" fontSize="lg" fontWeight="normal">
                {status}
              </Text>
            </Box>
            <Box px="12">
              <Text textAlign="center" fontSize="lg" fontWeight="bold">
                Nª Episodes
              </Text>
              <Text textAlign="center" fontSize="lg" fontWeight="normal">
                {episodes}
              </Text>
            </Box>
            <Box px="12">
              <Text textAlign="center" fontSize="lg" fontWeight="bold">
                Nª Seasons
              </Text>
              <Text textAlign="center" fontSize="lg" fontWeight="normal">
                {seasons}
              </Text>
            </Box>
            <Box px="12">
              <Text textAlign="center" fontSize="lg" fontWeight="bold">
                First air date
              </Text>
              <Text textAlign="center" fontSize="lg" fontWeight="normal">
                {firstDate}
              </Text>
            </Box>
            <Box px="12">
              <Text textAlign="center" fontSize="lg" fontWeight="bold">
                Time
              </Text>
              <Text textAlign="center" fontSize="lg" fontWeight="normal">
                {time}
              </Text>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  </ScaleFade>
);

CardDetails.defaultProps = {
  id: 0,
  name: '',
  img: '',
  // bgimg: '',
  loading: false,
  firstDate: '',
  popularity: 0,
  genres: [],
  time: 0,
  tagline: '',
  overview: '',
  status: '',
  episodes: 0,
  seasons: 0,
};

CardDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  loading: PropTypes.bool,
  firstDate: PropTypes.string,
  popularity: PropTypes.number,
  // bgimg: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.any),
  time: PropTypes.number,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  status: PropTypes.string,
  episodes: PropTypes.number,
  seasons: PropTypes.number,
};

export default CardDetails;
