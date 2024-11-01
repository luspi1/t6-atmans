import React, { useState } from 'react';
import { CardNewsItem, NewsItem } from 'src/types/news';
import { CardVideoItem, VideoItem } from 'src/types/videos';
import styles from './index.module.scss';

interface MobileListProps {
  items: CardNewsItem[] | CardVideoItem[] | undefined;
  defaultVisibleCount?: number;
  renderItem: React.ComponentType<CardNewsItem | CardVideoItem>,
  classListItems: string
}

const MobileList: React.FC<MobileListProps> = ({
  items,
  defaultVisibleCount = 2,
  renderItem: RenderItem ,
  classListItems
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleItems = isExpanded ? items : items?.slice(0, defaultVisibleCount);

  return (
    <div className={classListItems}>
      {visibleItems?.map(item => (
        <RenderItem key={item.id} {...item}/>
      ))}
      <button className={styles.showMoreBtn} onClick={toggleList}>
        {isExpanded ? 'Скрыть' : 'Показать ещё'}
      </button>
    </div>
  );
};

export default MobileList;
