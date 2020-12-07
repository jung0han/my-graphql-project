import React from 'react';
import { useFindNotesQuery, useGetDraftNotesQuery } from './generated-types';
import './App.less';
import Routes from './Routes';

const App: React.FC = () => {
  // const allNotes = useFindNotesQuery();
  // allNotes.startPolling(2000);
  // console.log(allNotes.data?.findNotes)

  // const [viewDraftNotes, setViewDraftNotes] = useState(false);

  // const draftNotes = useGetDraftNotesQuery();

  // const noteItems = viewDraftNotes ? draftNotes?.data?.getDraftNotes : allNotes.data?.findNotes?.items;

  return (
    <div style={{ minHeight: '100vh' }}>
      <Routes />
      {/* <CreateNote />
      <Box>
        <div style={{marginLeft: 400, paddingTop: 50 }}><Checkbox checked={viewDraftNotes} onChange={() => setViewDraftNotes(!viewDraftNotes)} /> <b>VIEW DRAFT NOTES</b></div>
        <ul>
          {
            // TODO fix typings
            noteItems && noteItems.map((note: any) => (
              <OneNote key={note._id} _id={note._id} title={note.title} description={note.description} comments={note.comments} />
            ))
          }
        </ul>
        <Button type="primary">Button</Button>
      </Box> */}
    </div>
  );
}

export default App;
