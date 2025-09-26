function CommentList({ comments }) {
  return (
    <div style={{ marginTop: '8px' }}>
      {comments.map((c, idx) => (
        <p key={idx} style={{ padding: '4px 0', borderBottom: '1px solid #4b2ff7' }}>
          {c}
        </p>
      ))}
    </div>
  );
}

export default CommentList;
