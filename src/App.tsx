type LinkItem = {
  title: string;
  href: string;
  description: string;
  tags: string[];
  note?: string;
  extraLinks?: { label: string; href: string }[];
};

type Category = {
  title: string;
  description: string;
  items: LinkItem[];
};

const categories: Category[] = [
  {
    title: "ポートフォリオ・IT系",
    description:
      "職務・個人問わず公開可能なものを整理しました。コード非公開の案件は成果物や概要のみの記載です。",
    items: [
      {
        title: "GitHub アカウント",
        href: "https://github.com/kawadumax",
        description: "公開リポジトリと OSS での活動一覧。",
        tags: ["GitHub", "OSS", "Code"],
      },
      {
        title: "ADHD 向けタスク管理アプリ (Win/Android)",
        href: "https://kawadumax.github.io/decopon/",
        description:
          "ADHD ユーザーのためのクロスプラットフォームタスク管理。TauriによるWin/Android両方に提供。バックエンドとしてRust(axum)を採用。",
        tags: ["React", "Tauri", "AWS", "Android", "Windows"],
        extraLinks: [
          { label: "GitHub", href: "https://github.com/kawadumax/decopon" },
          {
            label: "日本語概要",
            href: "https://github.com/kawadumax/decopon/blob/dev/documents/README.jp.md",
          },
        ],
      },
      {
        title: "社の公式ホームページ",
        href: "https://gina-reneos.com/",
        description: "WordPress で独自テーマを制作し、公開運用中。",
        tags: ["WordPress", "Theme", "Production"],
        note: "コード非公開",
      },
      {
        title: "React シンセサイザ Web アプリ",
        href: "https://web-audio-synthesizer.vercel.app/",
        description:
          "WebAudio API を用いた FM シンセ。SVG とシャドウで UI を構築し、画像素材をほぼ未使用で表現。WASMによるDSPも実装。",
        tags: ["React", "WebAudio", "UI", "Demo"],
        extraLinks: [
          {
            label: "GitHub",
            href: "https://github.com/kawadumax/WebAudioSynthesizer",
          },
        ],
      },
      {
        title: "障害福祉サービス向けタイピング練習",
        href: "https://train-data-entry.vercel.app/",
        description:
          "就労移行支援の訓練プログラムとして構築し、日次で利用されているタイピングアプリ。",
        tags: ["Next.js", "Vercel", "jotai", "Faker"],
        note: "コード非公開",
      },
      {
        title: "教材用技術記事 (例示)",
        href: "https://zenn.dev/kawaxumax/articles/4d7545127fe817",
        description:
          "職業指導員として制作した教材の参考例として、個人で執筆した技術記事を掲載。",
        tags: ["Zenn", "CI/CD", "ML", "DeFi"],
        extraLinks: [
          {
            label: "Python×CircleCI×Heroku",
            href: "https://zenn.dev/kawaxumax/articles/4d7545127fe817",
          },
          {
            label: "機械学習×仮想通貨予測",
            href: "https://zenn.dev/kawaxumax/articles/4c930efd511f75",
          },
          {
            label: "自動リバランス考察",
            href: "https://zenn.dev/kawaxumax/articles/c0e3640027fa05",
          },
        ],
      },
    ],
  },
  {
    title: "ポートフォリオ・音楽系",
    description:
      "音楽制作・音響監督・フィールドレコーディングなどの実績を抜粋しています。",
    items: [
      {
        title: "制作 CD (個人)",
        href: "https://utsounds.booth.pm/",
        description: "個人名義で制作した音源を頒布。",
        tags: ["Music", "Booth", "CD"],
      },
      {
        title: "インディー映画『雨女』他 音響監督",
        href: "https://www.youtube.com/watch?v=KqglIy0MhNY&pp=ygUW6JCx6YeO5a2d5bm4IOOAgOmbqOWlsw%3D%3D",
        description: "映像コンテンツの音響ディレクションおよび BGM 制作。",
        tags: ["Sound", "Film", "Direction"],
      },
      {
        title: "制作 CD (依頼案件)",
        href: "https://www.dlsite.com/home/work/=/product_id/RJ234654.html",
        description: "依頼案件として制作した音源を頒布。",
        tags: ["Commission", "BGM", "DLsite"],
      },
    ],
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
            href="https://github.com/kawadumax/pf-links"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-primary btn-sm"
            href="https://kawadumax.github.io/pf-links/"
            target="_blank"
            rel="noreferrer"
          >
            公開ページ
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <section className="rounded-box border border-base-300 bg-base-100 p-6 shadow-sm">
          <h1 className="text-3xl font-bold">制作物リンク集</h1>
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

        {categories.map((category) => (
          <section
            key={category.title}
            className="space-y-4 rounded-box border border-base-300 bg-base-100 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-sm text-base-content/70">
                  {category.description}
                </p>
              </div>
              <span className="badge badge-outline">
                {category.items.length}件
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <article
                  key={item.title}
                  className="card border border-base-300/80 bg-base-200/80 shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg"
                >
                  <div className="card-body gap-3">
                    <div className="space-y-1">
                      <h3 className="card-title text-lg leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-base-content/70">
                        {item.description}
                      </p>
                      {item.note ? (
                        <p className="text-xs text-warning">{item.note}</p>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge badge-sm badge-neutral"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.extraLinks ? (
                      <div className="space-y-2">
                        {item.extraLinks.map((link) => (
                          <div
                            key={link.href}
                            className="rounded-lg bg-base-300/70 px-3 py-2"
                          >
                            <p className="text-xs font-semibold text-base-content/70">
                              {link.label}
                            </p>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="link link-primary inline-flex items-center gap-1 break-all text-sm"
                            >
                              <span>{link.href}</span>
                              <span aria-hidden>↗</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : null}

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
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
