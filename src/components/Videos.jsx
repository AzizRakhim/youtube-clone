import { Stack, Box, Typography } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Typography color="#fff">Loading...</Typography>;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={"start"}
      gap={2}
    >
      {videos.map((item, idx) => {
        if (!item.id.videoId && !item.id.channelId) {
          return null;
        }

        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
