import { useState } from "react";
import styles from "./createPost.module.css";

interface PostType {
  title: string;
  content: string;
}
interface CreatePostProps {
  onSubmit: (title: string, body: string) => void;
}

const CreatePost = ({ onSubmit }: CreatePostProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, content);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles["container-title"]}>Criar Post</h2>
      <form className={styles["post-form"]} onSubmit={handleSubmit}>
        <div className={styles["text-area"]}>
          <label className={styles.label}>Título</label>
          <input
            type="text"
            className={styles["title-input"]}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles["text-area"]}>
          <label>Conteúdo</label>
          <textarea
            className={styles["text-input"]}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          {loading && (
            <button className={styles["submit-btn"]} disabled>
              Postando...
            </button>
          )}
          {!loading && <button className={styles["submit-btn"]}>Postar</button>}
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
