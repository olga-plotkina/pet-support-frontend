import { NoticeCategoryItem } from '../NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors';
import { ModalNotice } from '../ModalNotice';
import { selectModal } from '../../redux/modal/selectors';

export const NoticeCategoriesList = () => {
  const notices = useSelector(selectNotices);
  const isShowModal = useSelector(selectModal);

  return (
    <>
      {notices.length > 0 && (
        <List>
          {notices.map(item => (
            <NoticeCategoryItem key={item._id} {...item} />
          ))}
          {isShowModal && <ModalNotice />}
        </List>
      )}
    </>
  );
};
