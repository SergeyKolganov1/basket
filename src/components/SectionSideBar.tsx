import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSections, filterProductsBySection } from "../store/productReducers";
import { Section } from "../types/types";

  export const SectionSideBar: React.FC = () => {
    const dispatch = useDispatch();
    const sections: Section[] = useSelector((state: RootState) => state.sections);


    useEffect(() => {
        dispatch(fetchSections()); 
      }, [dispatch]);

      const handleFilterChange = (sectionId: string) => {
        dispatch(filterProductsBySection({sectionId}));
      };
    
    return (
      <div className="sidebar">
        <ul>
          {sections.map(section => (
            <li key={section.rid}>
              <Link
                onClick={() => handleFilterChange(section.rid)}
                to={`/${section.rid}`}
              >
                {section.rname}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };