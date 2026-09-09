jest.mock('aws-sdk', () => {
  return {
    S3: jest.fn(() => ({
      getObject: jest.fn().mockReturnThis(),
      promise: jest.fn(),
    })),
    DynamoDB: jest.fn(() => ({
      DocumentClient: jest.fn(() => ({
        get: jest.fn().mockReturnThis(),
        promise: jest.fn(),
      })),
    })),
  };
});

process.env.AWS_REGION = "us-east-1";
process.env.NODE_ENV = "test";

describe("Lazy Tests", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});