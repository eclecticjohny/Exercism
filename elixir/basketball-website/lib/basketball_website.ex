defmodule BasketballWebsite do
  @spec extract_from_path(Map.t(), String.t()) :: String.t() | nil
  def extract_from_path(data, path) do
    paths = String.split(path, ".")
    Enum.reduce(paths, data, fn path, acc -> acc[path] end)
  end

  @spec get_in_path(Map.t(), String.t()) :: String.t() | nil
  def get_in_path(data, path) do
    paths = String.split(path, ".")
    Kernel.get_in(data, paths)
  end
end
