// fetchNotes
// fetchNoteById
// getMe
// checkSession

import { FetchNotesResponse, Note } from '@/types/note';
import { nextServer } from './api';
import { cookies } from 'next/headers';

export async function fetchNotesServer(
  searchValue: string,
  page: number,
  tag?: string
): Promise<FetchNotesResponse> {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<FetchNotesResponse>('/notes', {
    headers: {
      Cookie: cookieStore.toString(),
    },
    params: {
      ...(searchValue !== '' && { search: searchValue }),
      page,
      perPage: 12,
      ...(tag && { tag }),
    },
  });
  return data;
}

export async function fetchNoteByIdServer(id: string): Promise<Note> {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
}
