import styled from 'styled-components/native';
import Title from '../components/detail/Title';

const DetailScreen = () => {
  return (
    <DetailScreenContainer //
      bounces={false}>
      <Title />
    </DetailScreenContainer>
  );
};

const DetailScreenContainer = styled.ScrollView`
  width: 100%;
`;

export default DetailScreen;
