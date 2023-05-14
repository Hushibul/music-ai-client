/* eslint-disable @typescript-eslint/no-explicit-any */
// import { AllCategories } from "../../assets/constants/constants";
import {
  allCategorie,
  Moods,
  Instruments,
  Genres,
  Occations,
  Themes,
  Eras,
} from "../../assets/constants/constants";
import { useState } from "react";

interface ICategory {
  id: number;
  title: string;
}

const AllCategory = () => {
  const [category, setCategory] = useState<ICategory[]>(Moods);
  return (
    <div className="mt-5">
      <h3 className="heading-secondary my-4">All Categories</h3>

      <ul className="d-none d-md-flex flex-wrap flex-column allCat list-unstyled">
        <li className="title subtitle-secondary mb-3">
          {allCategorie?.[0]?.title}
        </li>
        {allCategorie?.[0]?.items?.map((item: ICategory) => (
          <li className="item text-medium mb-2" key={item?.id}>
            {item?.title}
          </li>
        ))}
        <hr />
        <li className="title subtitle-secondary mb-3">
          {allCategorie?.[1]?.title}
        </li>
        {allCategorie?.[1]?.items?.map((item: ICategory) => (
          <li className="item text-medium mb-2" key={item?.id}>
            {item?.title}
          </li>
        ))}
        <hr />
        <li className="title subtitle-secondary mb-3">
          {allCategorie?.[2]?.title}
        </li>
        {allCategorie?.[2]?.items?.map((item: ICategory) => (
          <li className="item text-medium mb-2" key={item?.id}>
            {item?.title}
          </li>
        ))}
        <hr />
        <li className="title subtitle-secondary mb-3">
          {allCategorie?.[3]?.title}
        </li>
        {allCategorie?.[3]?.items?.map((item: ICategory) => (
          <li className="item text-medium mb-2" key={item?.id}>
            {item?.title}
          </li>
        ))}
        <hr />
        <li className="title subtitle-secondary mb-3">
          {allCategorie?.[4]?.title}
        </li>
        {allCategorie?.[4]?.items?.map((item: ICategory) => (
          <li className="item text-medium mb-2" key={item?.id}>
            {item?.title}
          </li>
        ))}
        <hr />
        <li className="title subtitle-secondary mb-3">
          {allCategorie?.[5]?.title}
        </li>
        {allCategorie?.[5]?.items?.map((item: ICategory) => (
          <li className="item text-medium mb-2" key={item?.id}>
            {item?.title}
          </li>
        ))}
      </ul>

      <ul className="d-flex gap-2 d-md-none flex-wrap list-unstyled pb-3 border-bottom border-secondary">
        <li
          onClick={() => setCategory(Moods)}
          className={`rounded-3 cursor-pointer border border-dark shadow text-small px-3 py-2 ${
            category === Moods && "bg-dark text-light"
          }`}
        >
          Moods
        </li>
        <li
          onClick={() => setCategory(Instruments)}
          className={`rounded-3 cursor-pointer border border-dark shadow text-small px-3 py-2 ${
            category === Instruments && "bg-dark text-light"
          }`}
        >
          Instruments
        </li>
        <li
          onClick={() => setCategory(Occations)}
          className={`rounded-3 cursor-pointer border border-dark shadow text-small px-3 py-2 ${
            category === Occations && "bg-dark text-light"
          }`}
        >
          Occations
        </li>
        <li
          onClick={() => setCategory(Genres)}
          className={`rounded-3 cursor-pointer border border-dark shadow text-small px-3 py-2 ${
            category === Genres && "bg-dark text-light"
          }`}
        >
          Genres
        </li>
        <li
          onClick={() => setCategory(Themes)}
          className={`rounded-3 cursor-pointer border border-dark shadow text-small px-3 py-2 ${
            category === Themes && "bg-dark text-light"
          }`}
        >
          Themes
        </li>
        <li
          onClick={() => setCategory(Eras)}
          className={`rounded-3 cursor-pointer border border-dark shadow text-small px-3 py-2 ${
            category === Eras && "bg-dark text-light"
          }`}
        >
          Eras
        </li>
      </ul>

      <ul className="d-flex d-md-none flex-wrap gap-2 list-unstyled">
        {category.map((item: ICategory) => (
          <li
            className="px-3 py-2 border border-secondary text-small rounded-3"
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCategory;
