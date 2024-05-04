import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
`;

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 1.2s;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 8rem;
  height: auto;
  background: rgba(0, 0, 0, 0.05);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: transform 0.3s;
  cursor: pointer;
  object-fit: contain;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  /* Conditionally position left or right based on props */
  ${(props) => (props.direction === 'left' ? 'left: 0;' : 'right: 0;')}
`;

const Scale = styled.span`
  transform: scale(3);
  &:hover {
    transform: scale(4);
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
`;

const IndicatorButton = styled.button`
  margin: 5px;
  background: #e5e7eb;
  border-radius: 50%;
  cursor: pointer;
  width: 8px;
  height: 8px;
  list-style: none;

  &.active {
    background-color: #808080;
    color: #fff;
    width: 1rem;
    border-radius: 1rem;
  }
`;

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  // logic to auto swipe
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // const useSwipeable = ({ onSwipedLeft, onSwipedRight }) => {
  //   const [touchStartX, setTouchStartX] = useState(0);

  //   const onTouchStart = (e) => {
  //     setTouchStartX(e.touches[0].clientX);
  //   };

  //   const onTouchEnd = (e) => {
  //     const touchEndX = e.changedTouches[0].clientX;
  //     const deltaX = touchStartX - touchEndX;

  //     const SWIPE_THRESHOLD = 50; // Minimum distance for swipe to be registered

  //     if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
  //       if (deltaX > 0) {
  //         onSwipedLeft();
  //       } else {
  //         onSwipedRight();
  //       }
  //     }
  //   };

  //   return {
  //     onTouchStart,
  //     onTouchEnd,
  //   };
  // };

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => updateIndex(activeIndex + 1),
  //   onSwipedRight: () => updateIndex(activeIndex - 1),
  // });

  const leftArrow = (
    <Scale>
      <svg
        width="24"
        height="24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.242 3.054 C 16.584 3.147,16.840 3.395,16.939 3.729 C 17.015 3.987,17.015 4.053,16.937 4.323 C 16.875 4.534,16.775 4.638,13.147 8.270 L 9.421 12.000 13.129 15.710 C 16.006 18.589,16.855 19.460,16.917 19.600 C 17.016 19.819,17.025 20.182,16.938 20.391 C 16.856 20.587,16.619 20.831,16.420 20.924 C 16.182 21.034,15.825 21.025,15.578 20.901 C 15.424 20.824,14.455 19.876,11.255 16.671 C 7.474 12.885,7.124 12.524,7.065 12.343 C 6.983 12.094,6.983 11.906,7.065 11.657 C 7.124 11.476,7.472 11.117,11.232 7.353 C 14.049 4.532,15.391 3.214,15.517 3.147 C 15.748 3.024,16.008 2.990,16.242 3.054"
          fill="white"
          stroke="none"
        ></path>
      </svg>
    </Scale>
  );

  const rightArrow = (
    <Scale>
      <svg
        width="24"
        height="24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054"
          fill="white"
          stroke="none"
        ></path>
      </svg>
    </Scale>
  );

  return (
    <>
      <CarouselWrapper
        // {...handlers}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: '100%' });
          })}
        </Inner>

        <Arrow
          direction="left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          {leftArrow}
        </Arrow>

        <Arrow
          direction="right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          {rightArrow}
        </Arrow>
      </CarouselWrapper>
      <Indicators>
        {React.Children.map(children, (child, index) => {
          return (
            <IndicatorButton
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            ></IndicatorButton>
          );
        })}
      </Indicators>
    </>
  );
};

export default Carousel;
