import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsFillCalendarHeartFill } from 'react-icons/bs';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

const DateSelection = ({ format = 'YYYY-MM-DD', autoFormatting = true }) => {
  const inputRef = useRef(null);
  const calendarRef = useRef(null);
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const getSeparator = () => {
    const regex = /[^0-9a-zA-Z]+/;
    const match = format.match(regex);

    if (match) {
      const symbol = match[0];
      const indexes = [];

      for (let i = 0; i < format.length; i++) {
        if (format[i] === symbol) {
          indexes.push(i);
        }
      }

      return { symbol, indexes };
    }
    return { symbol: undefined, indexes: [] };
  };

  const separator = getSeparator();

  const handleCursorPosition = (target: any) => {
    const { value, selectionStart } = target;
    let cursorPosition = selectionStart || value.length;

    if (cursorPosition === value.length) {
      cursorPosition += 1;
    }

    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    });
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;

    if (autoFormatting) {
      handleCursorPosition(target);

      let currentDate = [value]
        .filter((str) => str !== separator.symbol)
        .join('');

      if (separator.symbol && separator.indexes.length > 0) {
        separator.indexes.forEach((index) => {
          if (currentDate.length > index) {
            currentDate =
              currentDate.slice(0, index) +
              separator.symbol +
              currentDate.slice(index);
          }
        });
      }
      setDate(currentDate);
    } else {
      setDate(value);
    }
  };

  const handleClickButton = () => {
    setOpen(!open);
  };

  const handleKeyDownInput = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      setOpen(!open);
    }
  };

  const handleKeyDownButton = (e: React.KeyboardEvent) => {
    if (e.code === 'Tab' && open) {
      setOpen(false);
    }
  };

  const handleChangeCalendar = (selected: any) => {
    if (selected) {
      const formattedDate = selected.format(format);
      setDate(formattedDate);
      setOpen(false);
    }
  };

  const checkValidDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selectedDate = moment(value, format, true);
    console.log(selectedDate);
    const isValid = selectedDate.isValid();

    if (!isValid) {
      setDate('');
    }
  };

  const handleClickOut = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (open && inputRef.current && calendarRef.current) {
        const inputArea = inputRef.current as any;
        const calendarArea = calendarRef.current as any;
        const { target } = e;
        const outArea =
          !inputArea.contains(target) && !calendarArea.contains(target);

        if (outArea) {
          console.log(e.target);
          setOpen(false);
        }
      }
    },
    [open, inputRef, calendarRef, setOpen]
  );

  useEffect(() => {
    if (open && inputRef?.current && calendarRef?.current) {
      document.addEventListener('click', () => handleClickOut);
    }
  }, [open, inputRef, calendarRef, handleClickOut]);

  return (
    <section className='relative w-[272px]'>
      <div className='relative w-full' ref={inputRef}>
        <input
          className='w-[calc(100%-34px)] py-[8px] px-[16px] rounded-[4px] border-[#e0e2e7] outline-none'
          type='text'
          value={date}
          placeholder={format}
          onChange={handleChangeDate}
          onBlur={checkValidDate}
          ref={inputRef}
          onKeyDown={handleKeyDownInput}
        />
        <button
          className='absolute top-[50%] right-[8px] translate-y-[-50%] p-0 bg-transparent border-none cursor-pointer'
          type='button'
          onClick={handleClickButton}
          onKeyDown={handleKeyDownButton}
        >
          <BsFillCalendarHeartFill />
        </button>
      </div>
      {open && (
        <div
          className='w-full absolute left-[50%] translate-x-[-50%]'
          ref={calendarRef}
        >
          <Datetime
            input={false}
            timeFormat={false}
            dateFormat={format}
            value={date}
            onChange={handleChangeCalendar}
          />
        </div>
      )}
    </section>
  );
};

export default DateSelection;
