const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_HOME_POSITION':
      return {
        ...state,
        homePosition: action.payload
      };
    case 'ADD_ABOUT_POSITION':
      return {
        ...state,
        aboutPosition: action.payload
      };
    case 'ADD_RESUME_POSITION':
      return {
        ...state,
        resumePosition: action.payload
      };
    case 'ADD_PORTFOLIO_POSITION':
      return {
        ...state,
        portfolioPosition: action.payload
      };
    case 'ADD_SKILLS_POSITION':
      return {
        ...state,
        skillsPosition: action.payload
      };

    default:
      throw new Error('no matching types');
  }
};

export default reducer;
