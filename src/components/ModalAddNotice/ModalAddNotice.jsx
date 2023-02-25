import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addNotice } from '../../redux/notices/operations';
import { CloseModalIcon } from '../icons/CloseModalIcon';
// import { MalePetIcon } from '../icons/MalePetIcon';
import { AddPhotoOfPetIcon } from '../icons/AddPhotoOfPetIcon';
import { FemalePetIcon } from '../icons/FemalePetIcon';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Background,
  FerstModalWrapper,
  SecondModalWrapper,
  ModalContent,
  CloseModalButton,
  Title,
  ButtonCansel,
  ButtonNext,
  FerstForm,
  SecondForm,
  Input,
  Label,
  P,
  Categories,
  Category,
  GenderWrapper,
  GenderTitle,
  GenderItem,
  GenderInput,
  GenderP,
  GenderLabel,
  FileBox,
  Comments,
  CategoryWrap,
  Ferstbutton,
  SecondButton,
} from './ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

export const ModalAddNotice = ({ showModal, setShowModal }) => {
  const [active, setActive] = useState('FerstWraper');

  const formik = useFormik({
    initialValues: {
      announcement: '',
      title: '',
      name: '',
      birthday: '',
      breed: '',
      gender: '',
      location: '',
      price: '',
      image: '',
      comments: '',
    },
    onSubmit: values => Notify.failure(JSON.stringify(values, null, 2)),
  });

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const validate = () => {
    if (!formik.values.announcement) {
      return Notify.failure('announcement is required!');
    }
    if (!formik.values.title) {
      return Notify.failure('title is required!');
    }
    if (!formik.values.name) {
      return Notify.failure('name is required!');
    }
    if (!formik.values.birthday) {
      return Notify.failure('birthday is required!');
    }
    if (!formik.values.breed) {
      return Notify.failure('breed is required!');
    }
    if (!formik.values.gender) {
      return Notify.failure('gender is required!');
    }
    if (!formik.values.location) {
      return Notify.failure('location is required!');
    }
    if (!formik.values.price) {
      return Notify.failure('price is required!');
    }
    if (!formik.values.image) {
      return Notify.failure('image is required!');
    }
    if (!formik.values.comments) {
      return Notify.failure('comments is required!');
    }
  };
  const closeModal = () => setShowModal(prev => !prev);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    validate();
    closeModal();
    formik.resetForm();
    dispatch(addNotice(formik.values));
    console.log(formik.values);
  };
  const handleGender = e => (formik.values.gender = e.target.value);
  const handleCategory = e => (formik.values.announcement = e.target.value);
  return (
    <>
      {showModal ? (
        <Background>
          {active === 'FerstWraper' && (
            <FerstModalWrapper showModal={showModal}>
              <ModalContent>
                <Title> Add Pet</Title>
                <P>Enter information about your pet. All fields are required</P>

                <Title> Add Pet</Title>
                <P>Enter information about your pet. All fields are required</P>
                <Categories>
                  <label>
                    <CategoryWrap>lost/found</CategoryWrap>
                    <Category
                      type="radio"
                      name="lost-found"
                      value="lost-found"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                  <label>
                    <CategoryWrap>in good hands</CategoryWrap>
                    <Category
                      type="radio"
                      name="in-good-hands"
                      value="in-good-hands"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                  <label>
                    <CategoryWrap>sell</CategoryWrap>
                    <Category
                      type="radio"
                      name="sell"
                      value="sell"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                </Categories>

                <FerstForm onSubmit={formik.handleSubmit}>
                  <Label htmlFor="text">Tittle of ad</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="title"
                    value={formik.values.title}
                    required
                    autoFocus
                    placeholder="Type title"
                  />

                  <Label htmlFor="name ">Name pet</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    value={formik.values.name}
                    required
                    autoFocus
                    placeholder="Type name pet"
                  />

                  <Label htmlFor="Date">Date of birth </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="date"
                    name="birthday"
                    value={formik.values.birthday}
                    required
                    autoFocus
                    placeholder="Type date of birth "
                  />
                  <Label htmlFor="Breed">Breed</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="breed"
                    value={formik.values.breed}
                    required
                    autoFocus
                    placeholder="Type breed"
                  />
                </FerstForm>
                <Ferstbutton>
                  <ButtonCansel onClick={() => setShowModal(prev => !prev)}>Cancel</ButtonCansel>
                  <ButtonNext
                    onClick={() => {
                      setActive('SecondWraper');
                    }}
                  >
                    Next
                  </ButtonNext>
                </Ferstbutton>
                <CloseModalButton area-label="Close modal" onClick={closeModal}>
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>
              </ModalContent>
            </FerstModalWrapper>
          )}
          {active === 'SecondWraper' && (
            <SecondModalWrapper>
              <ModalContent>
                <Title> Add Pet</Title>
                <GenderTitle >The Sex*:</GenderTitle>
                <GenderWrapper>
                  
                  <GenderItem>
                    <GenderLabel>
                      <FemalePetIcon />
                      <GenderP>Male</GenderP>
                      <GenderInput
                        type="radio"
                        name="male"
                        value="male"
                        onChange={e => handleGender(e)}
                      />
                    </GenderLabel>
                  </GenderItem>
                  <GenderItem>
                    <GenderLabel>
                      <FemalePetIcon />
                      <GenderP>Female</GenderP>
                      <GenderInput
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={e => handleGender(e)}
                      />
                    </GenderLabel>
                  </GenderItem>
                </GenderWrapper>
                <SecondForm onSubmit={formik.handleSubmit}>
                  <Label htmlFor="text">Location*:</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="location"
                    name="location"
                    value={formik.values.location}
                    required
                    autoFocus
                    placeholder="Location"
                  ></Input>
                  <Label htmlFor="text">Price*:</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="price"
                    value={formik.values.price}
                    required
                    autoFocus
                    placeholder="price"
                  ></Input>
                  <FileBox>
                    <label>
                      <GenderInput
                        type="file"
                        name="image"
                        onChange={e => formik.setFieldValue('image', e.currentTarget.files[0])}
                        required
                      />
                      <AddPhotoOfPetIcon />
                    </label>
                  </FileBox>
                  <Label htmlFor="text">Comments*:</Label>
                  <Comments
                    onChange={formik.handleChange}
                    name="comments"
                    value={formik.values.comments}
                    autoFocus
                    placeholder="Comments"
                    required
                  ></Comments>
                </SecondForm>
                <SecondButton>
                  <ButtonCansel
                    onClick={() => {
                      setActive('FerstWraper');
                    }}
                  >
                    Back
                  </ButtonCansel>

                  <ButtonNext onClick={handleSubmit}>Done</ButtonNext>
                </SecondButton>
                <CloseModalButton
                  area-label="Close modal"
                  onClick={() => setShowModal(prev => !prev)}
                >
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>
              </ModalContent>
            </SecondModalWrapper>
          )}
        </Background>
      ) : null}
    </>
  );
};

ModalAddNotice.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
