function Editor() {
  return (
    <div className="overflow-hidden py-10 px-5 text-center text-blue900 lg:p-30">
      <h2 className="font-medium text-[1.5em] lg:text-[2em]">Designed for the future</h2>

      <div className="flex flex-col items-center gap-10 mt-10 lg:flex-row-reverse">
        <picture className="lg:w-1/2 relative -right-70">
          <source
            media="(min-width: 1024px)"
            srcSet="/images/illustration-editor-desktop.svg"
          />
          <img src="/images/illustration-editor-mobile.svg" alt="editor" />
        </picture>

        <div className="flex flex-col items-center gap-10 lg:w-1/2 lg:text-left">
          <div>
            <h2 className="text-[1.4em] font-medium lg:text-[1.8em]">
              Introducing an extensible editor
            </h2>
            <p className="text-gray600 mt-5">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>

          <div>
            <h2 className="text-[1.4em] font-medium lg:text-[1.8em]">
              Robust content management
            </h2>
            <p className="text-gray600 mt-5">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
