export const selectAllTags = state => state.tag.all;
export const selectTagColor = (tag) => state => state.tag.all.filter(el => el.name === tag)[0]?.color || '#C5CEE0';
export const selectTagIcon = (tag) => state => state.tag.all.filter(el => el.name === tag)[0]?.icon || 'eva:keypad-outline';