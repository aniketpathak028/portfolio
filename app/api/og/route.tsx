import { ImageResponse } from 'next/og';
export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') || 'My Portfolio';
  const slug = searchParams.get('slug');
  const imageStyle = {
    backgroundColor: '#121212', 
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: 60,
    fontWeight: 700,
    textAlign: 'center' as 'center',
    padding: '60px',
    fontFamily: '"Inter", sans-serif',
  };

  return new ImageResponse(
    (
      <div style={imageStyle}>
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Bricolage Grotesque',
          data: await fetch(
            new URL('../../../public/fonts/BricolageGrotesque-Bold.ttf', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}