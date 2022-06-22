defmodule LibraryFees do
  @moduledoc """
  Library software to automatically calculate late fees.
  """

  @spec datetime_from_string(String.t()) :: NaiveDateTime.t()
  def datetime_from_string(string) do
    NaiveDateTime.from_iso8601!(string)
  end

  @spec before_noon?(NaiveDateTime.t()) :: boolean()
  def before_noon?(datetime) do
    NaiveDateTime.to_time(datetime) |> Time.compare(~T[12:00:00.000]) == :lt
  end

  @spec return_date(NaiveDateTime.t()) :: Date.t()
  def return_date(checkout_datetime) do
    days = if before_noon?(checkout_datetime), do: 28, else: 29
    NaiveDateTime.to_date(checkout_datetime) |> Date.add(days)
  end

  @spec days_late(Calendar.date(), Calendar.date()) :: integer()
  def days_late(planned_return_date, actual_return_datetime) do
    diff = Date.diff(actual_return_datetime, planned_return_date)
    if diff < 0, do: 0, else: diff
  end

  @spec monday?(NaiveDateTime.t()) :: boolean()
  def monday?(datetime) do
    Date.day_of_week(datetime) == 1
  end

  @spec calculate_late_fee(String.t(), String.t(), number()) :: number()
  def calculate_late_fee(checkout, return, rate) do
    taken = datetime_from_string(checkout)
    given_back = datetime_from_string(return)
    due_date = return_date(taken)
    fee = days_late(due_date, given_back) * rate
    if monday?(given_back), do: floor(fee * 0.5), else: fee
  end
end
