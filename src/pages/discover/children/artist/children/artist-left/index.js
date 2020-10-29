import React, {memo} from 'react';
import propTypes from "prop-types";

import {artistClass} from "common/local-data";
import {ArtistLeftWrapper} from "./style";

function ArtistLeft(props) {
  const {currentIndex, changeArtistType} = props;

  const changeIndex = (title, value) => changeArtistType(title, value);

  return (
    <ArtistLeftWrapper>
      <div className="main">
        <ul>
          {
            Object.keys(artistClass).map(title => {
              return (
                <li key={title} className="left-item">
                  <h3>{title}</h3>
                  {
                    artistClass[title].map(item => {
                      return (
                        <div key={item.id} onClick={e => changeIndex(item.name, item)}>
                          <p className={"item-name" + (currentIndex === item.id ? " active" : "")}>{item.name}</p>
                        </div>
                      )
                    })
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </ArtistLeftWrapper>
  )
}

ArtistLeft.propTypes = {
  changeArtistType: propTypes.func.isRequired,
  currentIndex: propTypes.number
}

ArtistLeft.defaultProps = {
  currentIndex: -1
}

export default memo(ArtistLeft);
