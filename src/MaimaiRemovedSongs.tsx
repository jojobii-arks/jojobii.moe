import data from './data.json';
export default function App() {
  const getImageUrl = (imageName: string) => {
    return `https://dp4p6x0xfi5o9.cloudfront.net/maimai/img/cover-m/${imageName}`;
  };
  return (
    <div className="p-8">
      <div>
        <h1 className="font-bold text-3xl mb-4">maimai USA removed songs - as of 1.56F </h1>
        <div className="mb-1">
          These songs are present in International version but NOT in USA version.
        </div>
        <div className="text-sm italic">
          Reference:{' '}
          <a href="https://arcade-songs.zetaraku.dev/maimai/">
            https://arcade-songs.zetaraku.dev/maimai/
          </a>
        </div>
      </div>
      <hr className="my-8 border-gray-400" />

      {data.map((version, index) => (
        <>
          <div key={index}>
            <h2 className="font-bold text-3xl mb-4">{version.version}</h2>
            {version.songs.length === 0 && (
              <div className="my-4">No songs removed.</div>
            )}
            <div className="list-disc list-inside mb-8">
              {version.songs.map((song, songIndex) => (
                <div key={songIndex} className="mb-6 flex gap-3">
                  <img
                    src={getImageUrl(song.imageName)}
                    alt={song.title}
                    className="inline-block ml-0 w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col gap-0">
                    <div className="font-semibold text-lg">{song.title}</div>
                    <div className="text-purple-400">
                      {song.sheets
                        .filter(sheet => sheet.difficulty === 'master')
                        .map(sheet => (
                          <div key={sheet.difficulty}>
                            {sheet.difficulty} {sheet.type} - {sheet.level}
                          </div>
                        ))}
                    </div>
                    <div className="text-sm text-gray-600">{song.artist}</div>
                    <div className="text-xs text-gray-600">
                      ({song.category})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-8 border-gray-400" />
        </>
      ))}
    </div>
  );
}

