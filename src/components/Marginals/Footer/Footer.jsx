import Image from 'next/image';
import { socials, secondcol, thirdcol, footerBottom, firstcol } from '@/config/content/Footer';
import Link from 'next/link';
import MapModal from './MapModal';
import { List, SmallList } from '../shared/Typography/Lists';

import {
  FooterContainer,
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterContent,
  FooterColumn1,
  FooterColumn2,
  FooterColumn3,
  FooterColumn4,
  FooterColumn1Logo,
  FooterColumn1Title,
  SocialList,
  ItemList,
  FooterBottomContent,
  VSmallParagraph,
  FooterLogoText,
  FooterSubLogoText,
  FooterGradient,
  ListTitle,
  SocialImageContainer,
  Overlay,
  Modal,
} from './styles';
import { LogoText2 } from '../shared/Typography/Headings';
// import { createPortal } from 'react-dom';
import { PaymentPolicyModal } from './PaymentPolicyModel';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
// import { Modal } from 'flowbite-react';

export const Footer = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  const handleRegisterModalOpen = () => setIsRegisterModalOpen(true);
  const handleRegisterModalClose = () => setIsRegisterModalOpen(false);

  useEffect(() => {
    const root = document.getElementById('modal-root');
    if (root) {
      setModalRoot(root);
    }
  }, []);
  return (
    <>
      <FooterContainer id='contact'>
        <FooterWrapper>
          <FooterGradient />
          <FooterTop>
            <FooterContent>
              <FooterColumn1>
                <FooterColumn1Logo>
                  <Image
                    src={firstcol.img}
                    alt='Innovision'
                    height={40}
                    width={40}
                    className='lg:pt-[5px] xl:pt-0 2xl:h-[50px] 2xl:w-[50px] '
                  />
                  <FooterColumn1Title>
                    <FooterLogoText>{firstcol.title}</FooterLogoText>
                    <FooterSubLogoText>{firstcol.year}</FooterSubLogoText>
                  </FooterColumn1Title>
                </FooterColumn1Logo>
                <VSmallParagraph>{firstcol.text}</VSmallParagraph>
              </FooterColumn1>

              <FooterColumn2>
                <ItemList>
                  <ListTitle>NavIGaTION</ListTitle>
                  {RenderList(secondcol)}
                </ItemList>
              </FooterColumn2>
              <FooterColumn3>
                <ItemList>
                  <MapModal />
                  {RenderList(thirdcol)}
                </ItemList>
              </FooterColumn3>
              <FooterColumn4>
                <LogoText2>GET IN TOUCH</LogoText2>
                <SocialList>
                  {socials.map((item) => (
                    <li key={item.id}>
                      <Link href={item.url}>
                        <SocialImageContainer>
                          <Image
                            src={item.img}
                            alt={item.id}
                            width={45}
                            height={45}
                            className=' w-[30px] md:w-[36px] hover:brightness-200 transition-all duration-300 '
                          />
                        </SocialImageContainer>
                      </Link>
                    </li>
                  ))}
                </SocialList>
              </FooterColumn4>
            </FooterContent>
          </FooterTop>
          <FooterBottom>
            <FooterBottomContent>
              {footerBottom.map((item) => (
                <SmallList key={item.id} className='flex gap-[20px]'>
                  {item.id === 4 ? (
                    <button onClick={handleRegisterModalOpen}>{item.title}</button>
                  ) : (
                    <a href={item.url} target='_blank' rel='noopener noreferrer'>
                      {item.title}
                    </a>
                  )}
                </SmallList>
              ))}
            </FooterBottomContent>
          </FooterBottom>
        </FooterWrapper>
      </FooterContainer>

      {modalRoot &&
        isRegisterModalOpen &&
        createPortal(
          <Overlay>
            <Modal>
              <PaymentPolicyModal isClose={handleRegisterModalClose} />
            </Modal>
          </Overlay>,
          modalRoot,
        )}
    </>
  );
};

const RenderList = (listItems) =>
  listItems.map((item) => (
    <List key={item.id} className='flex gap-[20px] items-center'>
      <Link href={item.url}>{item.title}</Link>
    </List>
  ));
