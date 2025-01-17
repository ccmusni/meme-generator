import { Dispatch } from "react";
import { EDITOR_ACTIONS } from "../constants/editor-actions";
import { TextNode } from "../types/text-node";
import styles from "./TextNode.module.css";
import { EditorStoreAction } from "../store/editor-store";
import { IconTrash } from "@tabler/icons-react";

type TextNodeInputProps = {
  node: TextNode;
  dispatch: Dispatch<EditorStoreAction>;
};

export default function TextNodeInput({ node, dispatch }: TextNodeInputProps) {
  const removeTextNode = (nodeId: string) => {
    dispatch({
      type: EDITOR_ACTIONS.REMOVE_TEXT_NODE,
      payload: {
        id: nodeId,
      },
    });
  };

  return (
    <div className={styles.textNodeInputContainer}>
      <div className={styles.textNodeInputHeader}>
        <span>{node.title}</span>

        <button
          className={styles.buttonIcon}
          type="button"
          onClick={() => removeTextNode(node.id)}
        >
          <IconTrash stroke={1.2} color="red" size={18} />
        </button>
      </div>

      <input
        className={styles.textNodeInput}
        type="text"
        value={node.value}
        placeholder="Type something..."
        onChange={(e) => {
          dispatch({
            type: EDITOR_ACTIONS.UPDATE_TEXT_NODE,
            payload: { ...node, value: e.target.value },
          });
        }}
      />

      <div className={styles.textNodeInputControls}>
        <div className={styles.labelledControl}>
          <label htmlFor="color" className={styles.srOnly}>
            Color
          </label>
          <input
            className={styles.colorInput}
            type="color"
            id="color"
            value={node.color}
            onChange={(e) => {
              dispatch({
                type: EDITOR_ACTIONS.UPDATE_TEXT_NODE,
                payload: { ...node, color: e.target.value },
              });
            }}
          />
          <p>{node.color}</p>
        </div>

        <div className={styles.labelledControl}>
          <label htmlFor="fontSize" className={styles.srOnly}>
            Font size
          </label>
          <input
            name="fontSize"
            id="fontSize"
            type="number"
            value={node.fontSize}
            className={styles.fontSizeInput}
            placeholder="Font Size"
            onChange={(e) => {
              dispatch({
                type: EDITOR_ACTIONS.UPDATE_TEXT_NODE,
                payload: { ...node, fontSize: e.target.value },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
