import PropTypes from 'prop-types';
import {
  Box, Image, ScaleFade, Text,
} from '@chakra-ui/react';
import heart from '../../images/heart.png';
import star from '../../images/star.png';
import list from '../../images/list.png';
import tag from '../../images/tag.png';

function timeConvert(n) {
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}m`;
}

const CardDetails = ({
  id, name, img, bgimg, loading, date, popularity, genres,
  time, tagline, overview, status, language, budget, revenue,
}) => (
  <ScaleFade initialScale={0.9} in={!loading} className="border rounded">
    <Box
      w="100%"
      position="relative"
      bg="#fff"
      boxShadow="xl"
      bgImage={bgimg}
      bgPosition="center"
      bgRepeat="no-repeat"
      key={id}
    >
      <Box>
        <Image src={img} alt="poster" w="100%" />
      </Box>
      <Box>
        <Box textAlign="center">
          <Text textAlign="center" fontSize="lg" fontWeight="bolder">
            {name}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="lg" fontWeight="normal">
            {date}
          </Text>
          <Text textAlign="center" fontSize="lg" fontWeight="normal">
            {genres}
          </Text>
          <Text textAlign="center" fontSize="lg" fontWeight="normal">
            {timeConvert(time)}
          </Text>
        </Box>
        <Box textAlign="center">
          <Text textAlign="center" fontSize="lg" fontWeight="bold" className="py-1">
            {`${popularity * 10}%`}
          </Text>
          <Text textAlign="center" fontSize="lg" fontWeight="bold" className="py-1">
            User Score
          </Text>
          <Box>
            <Image src={list} alt="list icon" w="100%" />
          </Box>
          <Box>
            <Image src={heart} alt="heart icon" w="100%" />
          </Box>
          <Box>
            <Image src={tag} alt="tag icon" w="100%" />
          </Box>
          <Box>
            <Image src={star} alt="star icon" w="100%" />
          </Box>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="lg" fontWeight="normal">
            {tagline}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="lg" fontWeight="normal">
            Overview
          </Text>
          <Text textAlign="center" fontSize="lg" fontWeight="normal">
            {overview}
          </Text>
        </Box>
        <Box>
          <Box>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              Status
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              {status}
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              Language
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              {language}
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              Budget
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              {budget}
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              Revenue
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="normal">
              {revenue}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  </ScaleFade>
);

CardDetails.defaultProps = {
  id: '',
  name: '',
  img: '',
  bgimg: '',
  loading: false,
  date: '',
  popularity: '',
  genres: '',
  time: 0,
  tagline: '',
  overview: '',
  status: '',
  language: '',
  budget: 0,
  revenue: 0,
};

CardDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  loading: PropTypes.bool,
  date: PropTypes.number,
  popularity: PropTypes.number,
  bgimg: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.number,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  status: PropTypes.string,
  language: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default CardDetails;
