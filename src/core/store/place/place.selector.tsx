export const selectAddedPlaces = state => state?.place?.all.slice().reverse();

export const SELECT_ALL_PLACES_BY_PROFILE = (profile) => state => state?.place?.all.filter(p => p.profile === profile)