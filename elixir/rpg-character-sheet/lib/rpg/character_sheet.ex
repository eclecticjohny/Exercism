defmodule RPG.CharacterSheet do
  @spec welcome :: :ok
  def welcome() do
    IO.puts("Welcome! Let's fill out your character sheet together.")
  end

  @spec ask_name :: binary
  def ask_name() do
    IO.gets("What is your character's name?\n") |> String.trim()
  end

  @spec ask_class :: binary
  def ask_class() do
    IO.gets("What is your character's class?\n") |> String.trim()
  end

  @spec ask_level :: integer
  def ask_level() do
    IO.gets("What is your character's level?\n")
    |> String.trim()
    |> String.to_integer()
  end

  def run() do
    welcome()
    name = ask_name()
    class_ = ask_class()
    level = ask_level()

    %{
      class: class_,
      level: level,
      name: name
    }
    |> IO.inspect(label: "Your character")
  end
end
