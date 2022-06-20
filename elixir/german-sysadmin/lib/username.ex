defmodule Username do
  @spec sanitize(charlist()) :: charlist()
  def sanitize(username) do
    Enum.reduce(username, '', fn char, acc ->
      acc ++
        case char do
          ?_ -> '_'
          ?ä -> 'ae'
          ?ö -> 'oe'
          ?ß -> 'ss'
          ?ü -> 'ue'
          char when char in ?a..?z -> [char]
          _ -> ''
        end
    end)
  end
end
