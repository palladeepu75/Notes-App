import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInImportant } from "../../utils/findNotesInImportant";
import { findNotesInBin } from "../../utils/findNotesInBin";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive, important, bin } = useNotes();

  const onPinClick = (id) => {
    notesDispatch({
      type: "PIN",
      payload: { id },
    });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "Remove_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onImportantClick = (id) => {
    !isNotesInImportant
      ? notesDispatch({
          type: "ADD_TO_IMPORTANT",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_IMPORTANT",
          payload: { id },
        });
  };

  // its not work because of ternary operator its also correct code

  // const onBinClick = (id) => {
  //   !isNotesInBin ?
  //     notesDispatch({
  //       type: "ADD_TO_BIN",
  //       payload: { id },
  //     }):
  //     const confirmDelete = window.confirm("Are you sure you want to delete this note permanently?");
  //   if (confirmDelete) {
  //     notesDispatch({
  //       type: "DELETE_PERMANENTLY",
  //       payload: { id },
  //     });
  //     alert("Note deleted permanently!");
  //   }
  // };

  const onBinClick = (id) => {
    if (!isNotesInBin) {
      // Move note to bin
      notesDispatch({
        type: "ADD_TO_BIN",
        payload: { id },
      });
    } else {
      // Confirm before permanent delete
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this note permanently?"
      );
      if (confirmDelete) {
        notesDispatch({
          type: "DELETE_PERMANENTLY",
          payload: { id },
        });
        alert("Note deleted permanently!");
      }
    }
  };

  const onTrashClick = (id) => {
    isNotesInBin &&
      notesDispatch({
        type: "REMOVE_FROM_BIN",
        payload: { id },
      });
  };

  
  //findNotesInArchive function import from utils
  const isNotesInArchive = findNotesInArchive(archive, id);
  //findNotesInImportant function import from utils
  const isNotesInImportant = findNotesInImportant(important, id);
  //findNotesInBin function import from utils
  const isNotesInBin = findNotesInBin(bin, id);

  return (
    <div
      className="w-[300px] border border-neutral-800 p-2 rounded-md"
      key={id}
    >
      <div className="flex justify-between border-b-2 border-neutral-400">
        <p>{title}</p>

        {!isNotesInArchive && !isNotesInImportant ? (
          <button onClick={() => onPinClick(id)}>
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: `'FILL' ${
                  isPinned ? 1 : 0
                }, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
              }}
            >
              push_pin
            </span>
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          {!isNotesInBin ? (
            <>
              <button onClick={() => onImportantClick(id)}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: `'FILL' ${
                      isNotesInImportant ? 1 : 0
                    },
                'wght' 400, 'GRAD' 0, 'opsz' 24`,
                  }}
                >
                  label_important
                </span>
              </button>

              <button onClick={() => onArchiveClick(id)}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: `'FILL' ${isNotesInArchive ? 1 : 0},
                'wght' 400, 'GRAD' 0, 'opsz' 24`,
                  }}
                >
                  archive
                </span>
              </button>
            </>
          ) : (
            <>
              <button onClick={() => onTrashClick(id)}>
                <span className="material-symbols-outlined">
                  restore_from_trash
                </span>
              </button>
            </>
          )}

          <button onClick={() => onBinClick(id)}>
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: `'FILL' ${isNotesInBin ? 1 : 0},
                'wght' 400, 'GRAD' 0, 'opsz' 24`,
              }}
            >
              delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
