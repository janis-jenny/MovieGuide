import PropTypes from 'prop-types';
import {
  Box, Image, ScaleFade, Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import spinner from '../../images/spinner.png';

const Card = ({
  name, img, loading, date, popularity, id,
}) => (
  <ScaleFade initialScale={0.9} in={!loading} className="border rounded">
    <Box w="100%" position="relative" bg="#fff" boxShadow="xl">
      <Box>
        <Image src={img} alt="poster" w="100%" />
      </Box>
      <Box textAlign="center">
        {/* <Image src={spinner} alt="spinner" w="100%" position="absolute" /> */}
        <Text textAlign="center" fontSize="lg" fontWeight="bold" className="py-1">
          {`${popularity * 10}%`}
        </Text>
      </Box>
      <Box textAlign="center">
        <Text textAlign="center" fontSize="lg" fontWeight="bolder">
          <Link to={`/movie/${id}`} id={id} className="text-black text-decoration-none px-1">
            {name}
          </Link>
        </Text>
      </Box>
      <Box>
        <Text textAlign="center" fontSize="lg" fontWeight="normal">
          {date}
        </Text>
      </Box>
    </Box>
  </ScaleFade>
);

Card.defaultProps = {
  name: '',
  img: '',
  loading: false,
  date: '',
  popularity: '',
  id: '',
};

Card.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  loading: PropTypes.bool,
  date: PropTypes.number,
  popularity: PropTypes.number,
  id: PropTypes.string,
};

export default Card;
