import React from 'react'

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamDescription,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} from './styles'

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>jps_joao</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Elixir e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  )
}

export default StreamList