defmodule Username do
  @spec sanitize(charlist()) :: charlist()
  def sanitize(''), do: ''

  def sanitize([head | tail]) do
    sanitized =
      case head do
        ?ß -> 'ss'
        ?ä -> 'ae'
        ?ö -> 'oe'
        ?ü -> 'ue'
        x when x >= ?a and x <= ?z -> [x]
        ?_ -> '_'
        _ -> ''
      end

    sanitized ++ sanitize(tail)
  end
end
