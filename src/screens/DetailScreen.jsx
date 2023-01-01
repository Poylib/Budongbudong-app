import styled from 'styled-components/native';
import InvestmentScore from '../components/detail/InvestmentScore';
import Title from '../components/detail/Title';
import TransactionPrice from '../components/detail/TransactionPrice';

const DetailScreen = () => {
  return (
    <DetailScreenContainer //
      bounces={false}>
      <Title />
      <InvestmentScore />
      <TransactionPrice />
    </DetailScreenContainer>
  );
};

const DetailScreenContainer = styled.ScrollView`
  width: 100%;
`;

export default DetailScreen;
