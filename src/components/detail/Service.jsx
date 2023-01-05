import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { blueColor } from '../../theme';
import { DetailContainer } from './InvestmentScore';
const Service = () => {
  return (
    <DetailContainer style={{ flexDirection: 'row' }}>
      <View>
        <ServiceText>혹시 아파트 정보가 수정이 필요하다면</ServiceText>
        <ServiceText>수정해주세요. 부동부동 서비스를</ServiceText>
        <ServiceText>함께 만들어가요!</ServiceText>
        <TouchableOpacity //
          onPress={() => navigation.navigate('Contact')}
          activeOpacity={1}>
          <ContactText>정정 및 요청 문의하기 ></ContactText>
        </TouchableOpacity>
      </View>
      <ImgView>
        <SmileImg source={require('../../../assets/images/smile.png')} />
      </ImgView>
    </DetailContainer>
  );
};

const ServiceText = styled.Text`
  color: grey;
`;
const ContactText = styled.Text`
  padding: 20px 0;
  color: ${blueColor};
  font-size: 16px;
  font-weight: 600;
`;

const ImgView = styled.View`
  align-items: center;
  margin: 0 auto;
`;

const SmileImg = styled.Image`
  width: 70px;
  height: 90px;
`;

export default Service;
