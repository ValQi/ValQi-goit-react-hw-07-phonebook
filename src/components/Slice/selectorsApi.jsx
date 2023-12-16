import { createSelector } from 'reselect'; 
export const selectContacts = state => state.contacts.items;
export const selectStatusFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectVisibleContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );