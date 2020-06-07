export default function Articl({ children }) {
  return (
    <div className="container">
      <section className="articles">
        <div className="column is-8 is-offset-2">
          <div className="card article">
            <div className="card-content">
              <div className="media">
                <div className="media-content has-text-centered">
                  <p className="title article-title">Now++ incremental progress</p>
                  <div className="tags has-addons level-item">
                    <span className="tag is-rounded is-info">@torayeff</span>
                    <span className="tag is-rounded">May 10, 2018</span>
                  </div>
                </div>
              </div>
              <div className="content article-body">
                <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere
                  sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}