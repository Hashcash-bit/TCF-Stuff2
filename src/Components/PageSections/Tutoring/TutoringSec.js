import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
import TutorIllustration from "../images/tutorimage.svg";
import {ReactComponent as SvgDotPattern } from "../images/dot-pattern.svg"

const Container = tw.div`relative bg-white w-full`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative pr-6 pl-6`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
  tw`w-full`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-gray-600 pt-6`;
const Heading = tw(
  SectionHeading
)`mt-4 font-bold text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 bg-teal-600 pl-5 pr-5 pt-2 pb-2 text-primary-700 font-bold`,
  props.buttonRounded && tw`rounded-full`
]);


function TutoringSec ({
  subheading = "Trusted By Students, Verified By Mentors",
  heading = (
    <>
      Tutoring
    </>
  ),
  description = "The Coding Foundation's team of dedicated volunteers offers free one-on-one coding lessons for you! Sign up Now to Be a student.",
  primaryButtonText = "Sign Up for Tutoring!",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = TutorIllustration,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = false
}) {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded}/>
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
          <Subheading>{subheading}</Subheading>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {/* <Subheading>{subheading}</Subheading> */}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default TutoringSec