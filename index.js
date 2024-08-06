// pages/index.js
import { MantineProvider } from '@mantine/core';
import UpvoteButton from '../components/UpvoteButton';
import '../styles/globals.css';

export default function Home() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="max-w-xs mx-auto">
        <UpvoteButton />
      </div>
    </MantineProvider>
  );
}
