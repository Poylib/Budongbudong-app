import styled from 'styled-components/native';
import InvestmentScore from '../components/detail/InvestmentScore';
import Title from '../components/detail/Title';

const DetailScreen = () => {
  return (
    <DetailScreenContainer //
      bounces={false}>
      <Title />
      <InvestmentScore />
    </DetailScreenContainer>
  );
};

const DetailScreenContainer = styled.ScrollView`
  width: 100%;
`;

export default DetailScreen;
