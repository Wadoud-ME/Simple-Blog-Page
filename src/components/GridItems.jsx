import { gridItems } from "../data/data";
import GridItem from "./GridItem";

const GridItems = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {gridItems.map((gridItem) => (
        <GridItem
          key={gridItem.img}
          img={gridItem.img}
          tag={gridItem.tag}
          title={gridItem.title}
        />
      ))}
    </div>
  );
};

export default GridItems;
