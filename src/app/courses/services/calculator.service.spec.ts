import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";

describe("Calculator Service", () => {
  let calculator: CalculatorService, loggerSpy: any;
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("loggerService", ["log"]);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    calculator = TestBed.get(CalculatorService);
  });

  it("should add two number", () => {
    const result = calculator.add(2, 5);
    expect(result).toBe(7);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two number", () => {
    const result = calculator.subtract(2, 7);
    expect(result).toBe(-5, "unexpected result");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
