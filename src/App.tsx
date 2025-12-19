type LinkItem = {
  title: string;
  href: string;
  description: string;
  tags: string[];
  category: string;
};

const links: LinkItem[] = [
  {
    title: "GitHub リポジトリ",
    href: "https://github.com/yourname",
    description: "主要なコードやサンプルを公開しています。",
    tags: ["code", "oss", "actions"],
    category: "Project",
  },
  {
    title: "技術ブログ",
    href: "https://blog.example.com",
    description: "設計メモやトラブルシュート記事をまとめています。",
    tags: ["architecture", "testing", "observability"],
    category: "Article",
  },
  {
    title: "デモサイト",
    href: "https://demo.example.com",
    description: "稼働中のフロントエンドデモ。UI/UXの雰囲気を確認できます。",
    tags: ["frontend", "react", "vite"],
    category: "Demo",
  },
  {
    title: "スライド資料",
    href: "https://speakerdeck.com/yourname",
    description: "登壇・社内勉強会のスライドをまとめています。",
    tags: ["slides", "conference", "lt"],
    category: "Slide",
  },
  {
    title: "デザインモック",
    href: "https://www.figma.com/@yourname",
    description: "UIの叩き台やデザインシステムのメモ。",
    tags: ["figma", "ux", "prototype"],
    category: "Design",
  },
  {
    title: "連絡先",
    href: "mailto:you@example.com",
    description: "コラボやフィードバックの連絡はこちらから。",
    tags: ["contact", "feedback"],
    category: "Info",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <header className="navbar border-b border-base-300 bg-base-100">
        <div className="navbar-start gap-3 px-4">
          <span className="text-xl font-bold tracking-tight">PF Links</span>
          <span className="badge badge-outline">React + Vite</span>
        </div>
        <div className="navbar-end gap-2 px-4">
          <a
            className="btn btn-ghost btn-sm"
            href="https://github.com/yourname/pf-links"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-primary btn-sm"
            href="https://yourname.github.io/pf-links/"
            target="_blank"
            rel="noreferrer"
          >
            公開ページ
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <section className="rounded-box border border-base-300 bg-base-100 p-6 shadow-sm">
          <p className="text-sm text-base-content/70">
            ポートフォリオのリンク集
          </p>
          <h1 className="mt-1 text-3xl font-bold">
            アウトプットへの入口をまとめました
          </h1>
          <p className="mt-2 text-base text-base-content/70">
            プロダクト、記事、発表資料などへのアクセスをワンクリックで行えるよう整理しています。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="badge badge-info badge-outline">
              Tailwind CSS v4
            </span>
            <span className="badge badge-success badge-outline">daisyUI</span>
            <span className="badge badge-neutral badge-outline">
              GitHub Pages 対応
            </span>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {links.map((item) => (
            <article
              key={item.title}
              className="card border border-base-300 bg-base-100 shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="card-body gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h2 className="card-title text-lg leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-sm text-base-content/70">
                      {item.description}
                    </p>
                  </div>
                  <span className="badge badge-outline">{item.category}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="badge badge-sm badge-neutral">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    開く
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
