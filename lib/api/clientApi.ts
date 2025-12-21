// register;
// login;
// logout;
// checkSession;
// getMe;
// updateMe;
import { User } from '@/types/user';
import type { FetchNotesResponse, NewNote, Note, RegisterRequest } from '../../types/note';
import { nextServer } from './api';

export async function fetchNotes(
  searchValue: string,
  page: number,
  tag?: string
): Promise<FetchNotesResponse> {
  const { data } = await nextServer.get<FetchNotesResponse>('/notes', {
    params: {
      ...(searchValue !== '' && { search: searchValue }),
      page,
      perPage: 12,
      ...(tag && { tag }),
    },
  });
  return data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const { data } = await nextServer.post<Note>('/notes', newNote);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await nextServer.delete(`/notes/${id}`);
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await nextServer.get<Note>(`/notes/${id}`);
  return data;
}

export async function register(userData: RegisterRequest): Promise<User> {
  const { data } = await nextServer.post<User>('/auth/register', userData);
  return data;
}
