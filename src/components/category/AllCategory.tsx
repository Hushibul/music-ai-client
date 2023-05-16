import Styles from "./AllCategory.module.scss";
import {
  Moods,
  Instruments,
  Genres,
  Occations,
  Themes,
  Eras,
} from "../../assets/constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ILink {
  id: number;
  title: string;
  path?: string;
}

const AllCategory = () => {
  const [category, setCategory] = useState<ILink[]>(Moods);
  return (
    <div className={Styles.allcategory}>
      <h3 className={`${Styles.allcategory__title} mb-4 mb-md-5`}>
        All Categories
      </h3>

      {/* Medium to Large    */}
      <ul
        className={`${Styles.allcategory__categories} d-none list-unstyled d-sm-flex flex-column flex-wrap`}
      >
        {/* Moods  */}
        <li className={`${Styles.allcategory__categories_heading} mb-4`}>
          Moods
        </li>
        {Moods.map((item: ILink) => (
          <li className="pb-3" key={item.id}>
            <Link className="text-normal text-dark text-decoration-none" to="#">
              {item.title}
            </Link>
          </li>
        ))}

        <div className={Styles.allcategory__categories_borderBottom}></div>

        {/* Instruments  */}
        <li className={`${Styles.allcategory__categories_heading} mb-4`}>
          Instruments
        </li>
        {Instruments.map((item: ILink) => (
          <li className="pb-3" key={item.id}>
            <Link
              className="text-normal text-dark text-decoration-none"
              to={"#"}
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* Genres  */}
        <li className={`${Styles.allcategory__categories_heading} mb-4`}>
          Genres
        </li>
        {Genres.map((item: ILink) => (
          <li className="pb-3" key={item.id}>
            <Link
              className="text-normal text-dark text-decoration-none"
              to={"#"}
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* Occations  */}
        <li className={`${Styles.allcategory__categories_heading} mb-4`}>
          Occations
        </li>
        {Occations.map((item: ILink) => (
          <li className="pb-3" key={item.id}>
            <Link
              className="text-normal text-dark text-decoration-none"
              to={"#"}
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* Themes  */}
        <li className={`${Styles.allcategory__categories_heading} mb-4`}>
          Themes
        </li>
        {Themes.map((item: ILink) => (
          <li className="pb-3" key={item.id}>
            <Link
              className="text-normal text-dark text-decoration-none"
              to={"#"}
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* Eras  */}
        <li className={`${Styles.allcategory__categories_heading} mb-4`}>
          Eras
        </li>
        {Eras.map((item: ILink) => (
          <li className="pb-3" key={item.id}>
            <Link
              className="text-normal text-dark text-decoration-none"
              to={"#"}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Devices  */}
      <ul className="d-flex gap-2 d-sm-none flex-wrap list-unstyled pb-3 border-bottom border-secondary">
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

      <ul className="d-flex d-sm-none flex-wrap gap-2 list-unstyled">
        {category.map((item: ILink) => (
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
