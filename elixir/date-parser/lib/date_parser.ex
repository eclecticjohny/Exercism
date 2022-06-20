defmodule DateParser do
  @moduledoc """
  Module provides a set of functions to parse various date formats.
  """

  # reegex in elixir uses the pcre syntax
  # named subpatterns are used to capture the matched groups
  # http://www.pcre.org/original/doc/html/pcrepattern.html#SEC16

  @day_names ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  @month_names [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  @doc """
  Returns a regex string which matches a day number.
  """
  @spec day() :: String.t()
  def day() do
    "\\d{1,2}"
  end

  @doc """
  Returns a regex string which matches a month number.
  """
  @spec month() :: String.t()
  def month() do
    "\\d{1,2}"
  end

  @doc """
  Returns a regex string which matches a year number.
  """
  @spec year() :: String.t()
  def year() do
    "\\d{4}"
  end

  @doc """
  Returns a regex string which matches a day name.
  """
  @spec day_names() :: String.t()
  def day_names() do
    "(" <> Enum.join(@day_names, "|") <> ")"
  end

  @doc """
  Returns a regex string which matches a month name.
  """
  @spec month_names() :: String.t()
  def month_names() do
    "(" <> Enum.join(@month_names, "|") <> ")"
  end

  @doc """
  Returns a string pattern which captures the day number.
  """
  @spec capture_day() :: String.t()
  def capture_day() do
    "(?<day>#{day()})"
  end

  @doc """
  Returns a string pattern which captures the month number.
  """
  @spec capture_month() :: String.t()
  def capture_month() do
    "(?<month>#{month()})"
  end

  @doc """
  Returns a string pattern which captures the year number.
  """
  @spec capture_year() :: String.t()
  def capture_year() do
    "(?<year>#{year()})"
  end

  @doc """
  Returns a string pattern which captures the day name.
  """
  @spec capture_day_name() :: String.t()
  def capture_day_name() do
    "(?<day_name>#{day_names()})"
  end

  @doc """
  Returns a string pattern which captures the month name.
  """
  @spec capture_month_name() :: String.t()
  def capture_month_name() do
    "(?<month_name>#{month_names()})"
  end

  @doc """
  Returns a string pattern which captures numeric date format.
  """
  @spec capture_numeric_date() :: String.t()
  def capture_numeric_date() do
    "#{capture_day()}/#{capture_month()}/#{capture_year()}"
  end

  @doc """
  Returns a string pattern which captures month name date format.
  """
  @spec capture_month_name_date() :: String.t()
  def capture_month_name_date() do
    "#{capture_month_name()} #{capture_day()}, #{capture_year()}"
  end

  @doc """
  Returns a string pattern which captures day month name date format.
  """
  @spec capture_day_month_name_date() :: String.t()
  def capture_day_month_name_date() do
    "#{capture_day_name()}, #{capture_month_name()} #{capture_day()}, #{capture_year()}"
  end

  @doc """
  Returns a compiled regular expression that only matches the numeric date format,
  and which can also capture the date's components.
  """
  @spec match_numeric_date() :: Regex.t()
  def match_numeric_date() do
    ~r|^#{capture_numeric_date()}$|
  end

  @doc """
  Returns a compiled regular expression that only matches the month name date format,
  and which can also capture the date's components.
  """
  @spec match_month_name_date() :: Regex.t()
  def match_month_name_date() do
    ~r|^#{capture_month_name_date()}$|
  end

  @doc """
  Returns a compiled regular expression that only matches the day month name date format,
  and which can also capture the date's components.
  """
  @spec match_day_month_name_date() :: Regex.t()
  def match_day_month_name_date() do
    ~r|^#{capture_day_month_name_date()}$|
  end
end
