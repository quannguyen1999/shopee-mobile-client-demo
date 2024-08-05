export const turnToLeft = (animate: any, toOutputRange: number) => {
  return {
    translateX: animate.interpolate({
      inputRange: [0, 1],
      outputRange: [8, toOutputRange],
    }),
  };
};

export const turnToTop = (animate: any, toOutRange: number) => {
  return {
    translateY: animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, toOutRange],
    }),
  };
};

export const turnToSize = (animate: any) => {
  return {
    translateY: animate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 20],
    }),
  };
};

export const turnOpacity = (animate: any) => {
  return animate.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 1, 0],
  });
};

export const getUniqueID = () => {
  return Math.floor(Math.random() * Date.now()).toString();
};
