import React from 'react';
import {FlatList, View} from 'react-native';
import CarouselItem from './CarouselItem';
import {IMGS} from '../../constants';
import Pagination from './Paginations';

const images = [
  {id: 1, image: IMGS.discount},
  {id: 2, image: IMGS.discount},
  {id: 3, image: IMGS.discount},
  {id: 4, image: IMGS.discount},
  {id: 5, image: IMGS.discount},
];

const Carousel = (): JSX.Element => {
  const [index, setIndex] = React.useState<number>(0);

  const handleOnViewableItemsChanged = React.useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = React.useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => <CarouselItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination images={images} index={index} />
    </View>
  );
};

export default Carousel;
