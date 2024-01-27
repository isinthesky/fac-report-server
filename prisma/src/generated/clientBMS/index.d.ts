
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model point_history_230901
 * 
 */
export type point_history_230901 = $Result.DefaultSelection<Prisma.$point_history_230901Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Point_history_230901s
 * const point_history_230901s = await prisma.point_history_230901.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Point_history_230901s
   * const point_history_230901s = await prisma.point_history_230901.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.point_history_230901`: Exposes CRUD operations for the **point_history_230901** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Point_history_230901s
    * const point_history_230901s = await prisma.point_history_230901.findMany()
    * ```
    */
  get point_history_230901(): Prisma.point_history_230901Delegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    point_history_230901: 'point_history_230901'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'point_history_230901'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      point_history_230901: {
        payload: Prisma.$point_history_230901Payload<ExtArgs>
        fields: Prisma.point_history_230901FieldRefs
        operations: {
          findUnique: {
            args: Prisma.point_history_230901FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.point_history_230901FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>
          }
          findFirst: {
            args: Prisma.point_history_230901FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.point_history_230901FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>
          }
          findMany: {
            args: Prisma.point_history_230901FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>[]
          }
          create: {
            args: Prisma.point_history_230901CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>
          }
          createMany: {
            args: Prisma.point_history_230901CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.point_history_230901DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>
          }
          update: {
            args: Prisma.point_history_230901UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>
          }
          deleteMany: {
            args: Prisma.point_history_230901DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.point_history_230901UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.point_history_230901UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$point_history_230901Payload>
          }
          aggregate: {
            args: Prisma.Point_history_230901AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePoint_history_230901>
          }
          groupBy: {
            args: Prisma.point_history_230901GroupByArgs<ExtArgs>,
            result: $Utils.Optional<Point_history_230901GroupByOutputType>[]
          }
          count: {
            args: Prisma.point_history_230901CountArgs<ExtArgs>,
            result: $Utils.Optional<Point_history_230901CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model point_history_230901
   */

  export type AggregatePoint_history_230901 = {
    _count: Point_history_230901CountAggregateOutputType | null
    _avg: Point_history_230901AvgAggregateOutputType | null
    _sum: Point_history_230901SumAggregateOutputType | null
    _min: Point_history_230901MinAggregateOutputType | null
    _max: Point_history_230901MaxAggregateOutputType | null
  }

  export type Point_history_230901AvgAggregateOutputType = {
    path_id: number | null
    issued_date: number | null
    connection_status: number | null
  }

  export type Point_history_230901SumAggregateOutputType = {
    path_id: number | null
    issued_date: number | null
    connection_status: number | null
  }

  export type Point_history_230901MinAggregateOutputType = {
    path_id: number | null
    issued_date: number | null
    connection_status: number | null
    changed_value: string | null
  }

  export type Point_history_230901MaxAggregateOutputType = {
    path_id: number | null
    issued_date: number | null
    connection_status: number | null
    changed_value: string | null
  }

  export type Point_history_230901CountAggregateOutputType = {
    path_id: number
    issued_date: number
    connection_status: number
    changed_value: number
    _all: number
  }


  export type Point_history_230901AvgAggregateInputType = {
    path_id?: true
    issued_date?: true
    connection_status?: true
  }

  export type Point_history_230901SumAggregateInputType = {
    path_id?: true
    issued_date?: true
    connection_status?: true
  }

  export type Point_history_230901MinAggregateInputType = {
    path_id?: true
    issued_date?: true
    connection_status?: true
    changed_value?: true
  }

  export type Point_history_230901MaxAggregateInputType = {
    path_id?: true
    issued_date?: true
    connection_status?: true
    changed_value?: true
  }

  export type Point_history_230901CountAggregateInputType = {
    path_id?: true
    issued_date?: true
    connection_status?: true
    changed_value?: true
    _all?: true
  }

  export type Point_history_230901AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which point_history_230901 to aggregate.
     */
    where?: point_history_230901WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_history_230901s to fetch.
     */
    orderBy?: point_history_230901OrderByWithRelationInput | point_history_230901OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: point_history_230901WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_history_230901s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_history_230901s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned point_history_230901s
    **/
    _count?: true | Point_history_230901CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Point_history_230901AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Point_history_230901SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Point_history_230901MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Point_history_230901MaxAggregateInputType
  }

  export type GetPoint_history_230901AggregateType<T extends Point_history_230901AggregateArgs> = {
        [P in keyof T & keyof AggregatePoint_history_230901]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint_history_230901[P]>
      : GetScalarType<T[P], AggregatePoint_history_230901[P]>
  }




  export type point_history_230901GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: point_history_230901WhereInput
    orderBy?: point_history_230901OrderByWithAggregationInput | point_history_230901OrderByWithAggregationInput[]
    by: Point_history_230901ScalarFieldEnum[] | Point_history_230901ScalarFieldEnum
    having?: point_history_230901ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Point_history_230901CountAggregateInputType | true
    _avg?: Point_history_230901AvgAggregateInputType
    _sum?: Point_history_230901SumAggregateInputType
    _min?: Point_history_230901MinAggregateInputType
    _max?: Point_history_230901MaxAggregateInputType
  }

  export type Point_history_230901GroupByOutputType = {
    path_id: number
    issued_date: number
    connection_status: number
    changed_value: string
    _count: Point_history_230901CountAggregateOutputType | null
    _avg: Point_history_230901AvgAggregateOutputType | null
    _sum: Point_history_230901SumAggregateOutputType | null
    _min: Point_history_230901MinAggregateOutputType | null
    _max: Point_history_230901MaxAggregateOutputType | null
  }

  type GetPoint_history_230901GroupByPayload<T extends point_history_230901GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Point_history_230901GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Point_history_230901GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Point_history_230901GroupByOutputType[P]>
            : GetScalarType<T[P], Point_history_230901GroupByOutputType[P]>
        }
      >
    >


  export type point_history_230901Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    path_id?: boolean
    issued_date?: boolean
    connection_status?: boolean
    changed_value?: boolean
  }, ExtArgs["result"]["point_history_230901"]>

  export type point_history_230901SelectScalar = {
    path_id?: boolean
    issued_date?: boolean
    connection_status?: boolean
    changed_value?: boolean
  }


  export type $point_history_230901Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "point_history_230901"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      path_id: number
      issued_date: number
      connection_status: number
      changed_value: string
    }, ExtArgs["result"]["point_history_230901"]>
    composites: {}
  }


  type point_history_230901GetPayload<S extends boolean | null | undefined | point_history_230901DefaultArgs> = $Result.GetResult<Prisma.$point_history_230901Payload, S>

  type point_history_230901CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<point_history_230901FindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Point_history_230901CountAggregateInputType | true
    }

  export interface point_history_230901Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['point_history_230901'], meta: { name: 'point_history_230901' } }
    /**
     * Find zero or one Point_history_230901 that matches the filter.
     * @param {point_history_230901FindUniqueArgs} args - Arguments to find a Point_history_230901
     * @example
     * // Get one Point_history_230901
     * const point_history_230901 = await prisma.point_history_230901.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends point_history_230901FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, point_history_230901FindUniqueArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Point_history_230901 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {point_history_230901FindUniqueOrThrowArgs} args - Arguments to find a Point_history_230901
     * @example
     * // Get one Point_history_230901
     * const point_history_230901 = await prisma.point_history_230901.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends point_history_230901FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, point_history_230901FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Point_history_230901 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_history_230901FindFirstArgs} args - Arguments to find a Point_history_230901
     * @example
     * // Get one Point_history_230901
     * const point_history_230901 = await prisma.point_history_230901.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends point_history_230901FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, point_history_230901FindFirstArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Point_history_230901 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_history_230901FindFirstOrThrowArgs} args - Arguments to find a Point_history_230901
     * @example
     * // Get one Point_history_230901
     * const point_history_230901 = await prisma.point_history_230901.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends point_history_230901FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, point_history_230901FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Point_history_230901s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_history_230901FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Point_history_230901s
     * const point_history_230901s = await prisma.point_history_230901.findMany()
     * 
     * // Get first 10 Point_history_230901s
     * const point_history_230901s = await prisma.point_history_230901.findMany({ take: 10 })
     * 
     * // Only select the `path_id`
     * const point_history_230901WithPath_idOnly = await prisma.point_history_230901.findMany({ select: { path_id: true } })
     * 
    **/
    findMany<T extends point_history_230901FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, point_history_230901FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Point_history_230901.
     * @param {point_history_230901CreateArgs} args - Arguments to create a Point_history_230901.
     * @example
     * // Create one Point_history_230901
     * const Point_history_230901 = await prisma.point_history_230901.create({
     *   data: {
     *     // ... data to create a Point_history_230901
     *   }
     * })
     * 
    **/
    create<T extends point_history_230901CreateArgs<ExtArgs>>(
      args: SelectSubset<T, point_history_230901CreateArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Point_history_230901s.
     *     @param {point_history_230901CreateManyArgs} args - Arguments to create many Point_history_230901s.
     *     @example
     *     // Create many Point_history_230901s
     *     const point_history_230901 = await prisma.point_history_230901.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends point_history_230901CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, point_history_230901CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Point_history_230901.
     * @param {point_history_230901DeleteArgs} args - Arguments to delete one Point_history_230901.
     * @example
     * // Delete one Point_history_230901
     * const Point_history_230901 = await prisma.point_history_230901.delete({
     *   where: {
     *     // ... filter to delete one Point_history_230901
     *   }
     * })
     * 
    **/
    delete<T extends point_history_230901DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, point_history_230901DeleteArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Point_history_230901.
     * @param {point_history_230901UpdateArgs} args - Arguments to update one Point_history_230901.
     * @example
     * // Update one Point_history_230901
     * const point_history_230901 = await prisma.point_history_230901.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends point_history_230901UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, point_history_230901UpdateArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Point_history_230901s.
     * @param {point_history_230901DeleteManyArgs} args - Arguments to filter Point_history_230901s to delete.
     * @example
     * // Delete a few Point_history_230901s
     * const { count } = await prisma.point_history_230901.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends point_history_230901DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, point_history_230901DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Point_history_230901s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_history_230901UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Point_history_230901s
     * const point_history_230901 = await prisma.point_history_230901.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends point_history_230901UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, point_history_230901UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Point_history_230901.
     * @param {point_history_230901UpsertArgs} args - Arguments to update or create a Point_history_230901.
     * @example
     * // Update or create a Point_history_230901
     * const point_history_230901 = await prisma.point_history_230901.upsert({
     *   create: {
     *     // ... data to create a Point_history_230901
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point_history_230901 we want to update
     *   }
     * })
    **/
    upsert<T extends point_history_230901UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, point_history_230901UpsertArgs<ExtArgs>>
    ): Prisma__point_history_230901Client<$Result.GetResult<Prisma.$point_history_230901Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Point_history_230901s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_history_230901CountArgs} args - Arguments to filter Point_history_230901s to count.
     * @example
     * // Count the number of Point_history_230901s
     * const count = await prisma.point_history_230901.count({
     *   where: {
     *     // ... the filter for the Point_history_230901s we want to count
     *   }
     * })
    **/
    count<T extends point_history_230901CountArgs>(
      args?: Subset<T, point_history_230901CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Point_history_230901CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point_history_230901.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Point_history_230901AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Point_history_230901AggregateArgs>(args: Subset<T, Point_history_230901AggregateArgs>): Prisma.PrismaPromise<GetPoint_history_230901AggregateType<T>>

    /**
     * Group by Point_history_230901.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {point_history_230901GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends point_history_230901GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: point_history_230901GroupByArgs['orderBy'] }
        : { orderBy?: point_history_230901GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, point_history_230901GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoint_history_230901GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the point_history_230901 model
   */
  readonly fields: point_history_230901FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for point_history_230901.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__point_history_230901Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the point_history_230901 model
   */ 
  interface point_history_230901FieldRefs {
    readonly path_id: FieldRef<"point_history_230901", 'Int'>
    readonly issued_date: FieldRef<"point_history_230901", 'Int'>
    readonly connection_status: FieldRef<"point_history_230901", 'Int'>
    readonly changed_value: FieldRef<"point_history_230901", 'String'>
  }
    

  // Custom InputTypes

  /**
   * point_history_230901 findUnique
   */
  export type point_history_230901FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * Filter, which point_history_230901 to fetch.
     */
    where: point_history_230901WhereUniqueInput
  }


  /**
   * point_history_230901 findUniqueOrThrow
   */
  export type point_history_230901FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * Filter, which point_history_230901 to fetch.
     */
    where: point_history_230901WhereUniqueInput
  }


  /**
   * point_history_230901 findFirst
   */
  export type point_history_230901FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * Filter, which point_history_230901 to fetch.
     */
    where?: point_history_230901WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_history_230901s to fetch.
     */
    orderBy?: point_history_230901OrderByWithRelationInput | point_history_230901OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for point_history_230901s.
     */
    cursor?: point_history_230901WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_history_230901s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_history_230901s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of point_history_230901s.
     */
    distinct?: Point_history_230901ScalarFieldEnum | Point_history_230901ScalarFieldEnum[]
  }


  /**
   * point_history_230901 findFirstOrThrow
   */
  export type point_history_230901FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * Filter, which point_history_230901 to fetch.
     */
    where?: point_history_230901WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_history_230901s to fetch.
     */
    orderBy?: point_history_230901OrderByWithRelationInput | point_history_230901OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for point_history_230901s.
     */
    cursor?: point_history_230901WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_history_230901s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_history_230901s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of point_history_230901s.
     */
    distinct?: Point_history_230901ScalarFieldEnum | Point_history_230901ScalarFieldEnum[]
  }


  /**
   * point_history_230901 findMany
   */
  export type point_history_230901FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * Filter, which point_history_230901s to fetch.
     */
    where?: point_history_230901WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of point_history_230901s to fetch.
     */
    orderBy?: point_history_230901OrderByWithRelationInput | point_history_230901OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing point_history_230901s.
     */
    cursor?: point_history_230901WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` point_history_230901s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` point_history_230901s.
     */
    skip?: number
    distinct?: Point_history_230901ScalarFieldEnum | Point_history_230901ScalarFieldEnum[]
  }


  /**
   * point_history_230901 create
   */
  export type point_history_230901CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * The data needed to create a point_history_230901.
     */
    data: XOR<point_history_230901CreateInput, point_history_230901UncheckedCreateInput>
  }


  /**
   * point_history_230901 createMany
   */
  export type point_history_230901CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many point_history_230901s.
     */
    data: point_history_230901CreateManyInput | point_history_230901CreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * point_history_230901 update
   */
  export type point_history_230901UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * The data needed to update a point_history_230901.
     */
    data: XOR<point_history_230901UpdateInput, point_history_230901UncheckedUpdateInput>
    /**
     * Choose, which point_history_230901 to update.
     */
    where: point_history_230901WhereUniqueInput
  }


  /**
   * point_history_230901 updateMany
   */
  export type point_history_230901UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update point_history_230901s.
     */
    data: XOR<point_history_230901UpdateManyMutationInput, point_history_230901UncheckedUpdateManyInput>
    /**
     * Filter which point_history_230901s to update
     */
    where?: point_history_230901WhereInput
  }


  /**
   * point_history_230901 upsert
   */
  export type point_history_230901UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * The filter to search for the point_history_230901 to update in case it exists.
     */
    where: point_history_230901WhereUniqueInput
    /**
     * In case the point_history_230901 found by the `where` argument doesn't exist, create a new point_history_230901 with this data.
     */
    create: XOR<point_history_230901CreateInput, point_history_230901UncheckedCreateInput>
    /**
     * In case the point_history_230901 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<point_history_230901UpdateInput, point_history_230901UncheckedUpdateInput>
  }


  /**
   * point_history_230901 delete
   */
  export type point_history_230901DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
    /**
     * Filter which point_history_230901 to delete.
     */
    where: point_history_230901WhereUniqueInput
  }


  /**
   * point_history_230901 deleteMany
   */
  export type point_history_230901DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which point_history_230901s to delete
     */
    where?: point_history_230901WhereInput
  }


  /**
   * point_history_230901 without action
   */
  export type point_history_230901DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the point_history_230901
     */
    select?: point_history_230901Select<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Point_history_230901ScalarFieldEnum: {
    path_id: 'path_id',
    issued_date: 'issued_date',
    connection_status: 'connection_status',
    changed_value: 'changed_value'
  };

  export type Point_history_230901ScalarFieldEnum = (typeof Point_history_230901ScalarFieldEnum)[keyof typeof Point_history_230901ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type point_history_230901WhereInput = {
    AND?: point_history_230901WhereInput | point_history_230901WhereInput[]
    OR?: point_history_230901WhereInput[]
    NOT?: point_history_230901WhereInput | point_history_230901WhereInput[]
    path_id?: IntFilter<"point_history_230901"> | number
    issued_date?: IntFilter<"point_history_230901"> | number
    connection_status?: IntFilter<"point_history_230901"> | number
    changed_value?: StringFilter<"point_history_230901"> | string
  }

  export type point_history_230901OrderByWithRelationInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
    changed_value?: SortOrder
  }

  export type point_history_230901WhereUniqueInput = Prisma.AtLeast<{
    path_id?: number
    AND?: point_history_230901WhereInput | point_history_230901WhereInput[]
    OR?: point_history_230901WhereInput[]
    NOT?: point_history_230901WhereInput | point_history_230901WhereInput[]
    issued_date?: IntFilter<"point_history_230901"> | number
    connection_status?: IntFilter<"point_history_230901"> | number
    changed_value?: StringFilter<"point_history_230901"> | string
  }, "path_id">

  export type point_history_230901OrderByWithAggregationInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
    changed_value?: SortOrder
    _count?: point_history_230901CountOrderByAggregateInput
    _avg?: point_history_230901AvgOrderByAggregateInput
    _max?: point_history_230901MaxOrderByAggregateInput
    _min?: point_history_230901MinOrderByAggregateInput
    _sum?: point_history_230901SumOrderByAggregateInput
  }

  export type point_history_230901ScalarWhereWithAggregatesInput = {
    AND?: point_history_230901ScalarWhereWithAggregatesInput | point_history_230901ScalarWhereWithAggregatesInput[]
    OR?: point_history_230901ScalarWhereWithAggregatesInput[]
    NOT?: point_history_230901ScalarWhereWithAggregatesInput | point_history_230901ScalarWhereWithAggregatesInput[]
    path_id?: IntWithAggregatesFilter<"point_history_230901"> | number
    issued_date?: IntWithAggregatesFilter<"point_history_230901"> | number
    connection_status?: IntWithAggregatesFilter<"point_history_230901"> | number
    changed_value?: StringWithAggregatesFilter<"point_history_230901"> | string
  }

  export type point_history_230901CreateInput = {
    path_id: number
    issued_date: number
    connection_status: number
    changed_value: string
  }

  export type point_history_230901UncheckedCreateInput = {
    path_id: number
    issued_date: number
    connection_status: number
    changed_value: string
  }

  export type point_history_230901UpdateInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    issued_date?: IntFieldUpdateOperationsInput | number
    connection_status?: IntFieldUpdateOperationsInput | number
    changed_value?: StringFieldUpdateOperationsInput | string
  }

  export type point_history_230901UncheckedUpdateInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    issued_date?: IntFieldUpdateOperationsInput | number
    connection_status?: IntFieldUpdateOperationsInput | number
    changed_value?: StringFieldUpdateOperationsInput | string
  }

  export type point_history_230901CreateManyInput = {
    path_id: number
    issued_date: number
    connection_status: number
    changed_value: string
  }

  export type point_history_230901UpdateManyMutationInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    issued_date?: IntFieldUpdateOperationsInput | number
    connection_status?: IntFieldUpdateOperationsInput | number
    changed_value?: StringFieldUpdateOperationsInput | string
  }

  export type point_history_230901UncheckedUpdateManyInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    issued_date?: IntFieldUpdateOperationsInput | number
    connection_status?: IntFieldUpdateOperationsInput | number
    changed_value?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type point_history_230901CountOrderByAggregateInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
    changed_value?: SortOrder
  }

  export type point_history_230901AvgOrderByAggregateInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
  }

  export type point_history_230901MaxOrderByAggregateInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
    changed_value?: SortOrder
  }

  export type point_history_230901MinOrderByAggregateInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
    changed_value?: SortOrder
  }

  export type point_history_230901SumOrderByAggregateInput = {
    path_id?: SortOrder
    issued_date?: SortOrder
    connection_status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use point_history_230901DefaultArgs instead
     */
    export type point_history_230901Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = point_history_230901DefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}