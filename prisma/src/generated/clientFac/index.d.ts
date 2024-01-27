
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
 * Model general
 * 
 */
export type general = $Result.DefaultSelection<Prisma.$generalPayload>
/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model Division
 * 
 */
export type Division = $Result.DefaultSelection<Prisma.$DivisionPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Generals
 * const generals = await prisma.general.findMany()
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
   * // Fetch zero or more Generals
   * const generals = await prisma.general.findMany()
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
   * `prisma.general`: Exposes CRUD operations for the **general** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generals
    * const generals = await prisma.general.findMany()
    * ```
    */
  get general(): Prisma.generalDelegate<ExtArgs>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs>;

  /**
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.DivisionDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;
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
    general: 'general',
    Station: 'Station',
    Division: 'Division',
    Device: 'Device'
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
      modelProps: 'general' | 'station' | 'division' | 'device'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      general: {
        payload: Prisma.$generalPayload<ExtArgs>
        fields: Prisma.generalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.generalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.generalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>
          }
          findFirst: {
            args: Prisma.generalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.generalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>
          }
          findMany: {
            args: Prisma.generalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>[]
          }
          create: {
            args: Prisma.generalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>
          }
          createMany: {
            args: Prisma.generalCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.generalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>
          }
          update: {
            args: Prisma.generalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>
          }
          deleteMany: {
            args: Prisma.generalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.generalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.generalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$generalPayload>
          }
          aggregate: {
            args: Prisma.GeneralAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGeneral>
          }
          groupBy: {
            args: Prisma.generalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GeneralGroupByOutputType>[]
          }
          count: {
            args: Prisma.generalCountArgs<ExtArgs>,
            result: $Utils.Optional<GeneralCountAggregateOutputType> | number
          }
        }
      }
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>,
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      Division: {
        payload: Prisma.$DivisionPayload<ExtArgs>
        fields: Prisma.DivisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findFirst: {
            args: Prisma.DivisionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findMany: {
            args: Prisma.DivisionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          create: {
            args: Prisma.DivisionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          createMany: {
            args: Prisma.DivisionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DivisionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          update: {
            args: Prisma.DivisionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          deleteMany: {
            args: Prisma.DivisionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DivisionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.DivisionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionCountArgs<ExtArgs>,
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>,
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
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
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    Division: number
    Device: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Division?: boolean | StationCountOutputTypeCountDivisionArgs
    Device?: boolean | StationCountOutputTypeCountDeviceArgs
  }

  // Custom InputTypes

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountDivisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }



  /**
   * Count Type DivisionCountOutputType
   */

  export type DivisionCountOutputType = {
    Device: number
  }

  export type DivisionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Device?: boolean | DivisionCountOutputTypeCountDeviceArgs
  }

  // Custom InputTypes

  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DivisionCountOutputType
     */
    select?: DivisionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DivisionCountOutputType without action
   */
  export type DivisionCountOutputTypeCountDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }



  /**
   * Models
   */

  /**
   * Model general
   */

  export type AggregateGeneral = {
    _count: GeneralCountAggregateOutputType | null
    _avg: GeneralAvgAggregateOutputType | null
    _sum: GeneralSumAggregateOutputType | null
    _min: GeneralMinAggregateOutputType | null
    _max: GeneralMaxAggregateOutputType | null
  }

  export type GeneralAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneralSumAggregateOutputType = {
    id: number | null
  }

  export type GeneralMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type GeneralMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type GeneralCountAggregateOutputType = {
    id: number
    type: number
    value: number
    _all: number
  }


  export type GeneralAvgAggregateInputType = {
    id?: true
  }

  export type GeneralSumAggregateInputType = {
    id?: true
  }

  export type GeneralMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type GeneralMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type GeneralCountAggregateInputType = {
    id?: true
    type?: true
    value?: true
    _all?: true
  }

  export type GeneralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which general to aggregate.
     */
    where?: generalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generals to fetch.
     */
    orderBy?: generalOrderByWithRelationInput | generalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: generalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned generals
    **/
    _count?: true | GeneralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralMaxAggregateInputType
  }

  export type GetGeneralAggregateType<T extends GeneralAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneral[P]>
      : GetScalarType<T[P], AggregateGeneral[P]>
  }




  export type generalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: generalWhereInput
    orderBy?: generalOrderByWithAggregationInput | generalOrderByWithAggregationInput[]
    by: GeneralScalarFieldEnum[] | GeneralScalarFieldEnum
    having?: generalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralCountAggregateInputType | true
    _avg?: GeneralAvgAggregateInputType
    _sum?: GeneralSumAggregateInputType
    _min?: GeneralMinAggregateInputType
    _max?: GeneralMaxAggregateInputType
  }

  export type GeneralGroupByOutputType = {
    id: number
    type: string
    value: JsonValue | null
    _count: GeneralCountAggregateOutputType | null
    _avg: GeneralAvgAggregateOutputType | null
    _sum: GeneralSumAggregateOutputType | null
    _min: GeneralMinAggregateOutputType | null
    _max: GeneralMaxAggregateOutputType | null
  }

  type GetGeneralGroupByPayload<T extends generalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralGroupByOutputType[P]>
        }
      >
    >


  export type generalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    value?: boolean
  }, ExtArgs["result"]["general"]>

  export type generalSelectScalar = {
    id?: boolean
    type?: boolean
    value?: boolean
  }


  export type $generalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "general"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      value: Prisma.JsonValue | null
    }, ExtArgs["result"]["general"]>
    composites: {}
  }


  type generalGetPayload<S extends boolean | null | undefined | generalDefaultArgs> = $Result.GetResult<Prisma.$generalPayload, S>

  type generalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<generalFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GeneralCountAggregateInputType | true
    }

  export interface generalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['general'], meta: { name: 'general' } }
    /**
     * Find zero or one General that matches the filter.
     * @param {generalFindUniqueArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends generalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, generalFindUniqueArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one General that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {generalFindUniqueOrThrowArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends generalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, generalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first General that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generalFindFirstArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends generalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, generalFindFirstArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first General that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generalFindFirstOrThrowArgs} args - Arguments to find a General
     * @example
     * // Get one General
     * const general = await prisma.general.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends generalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, generalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Generals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generals
     * const generals = await prisma.general.findMany()
     * 
     * // Get first 10 Generals
     * const generals = await prisma.general.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalWithIdOnly = await prisma.general.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends generalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, generalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a General.
     * @param {generalCreateArgs} args - Arguments to create a General.
     * @example
     * // Create one General
     * const General = await prisma.general.create({
     *   data: {
     *     // ... data to create a General
     *   }
     * })
     * 
    **/
    create<T extends generalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, generalCreateArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Generals.
     *     @param {generalCreateManyArgs} args - Arguments to create many Generals.
     *     @example
     *     // Create many Generals
     *     const general = await prisma.general.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends generalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, generalCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a General.
     * @param {generalDeleteArgs} args - Arguments to delete one General.
     * @example
     * // Delete one General
     * const General = await prisma.general.delete({
     *   where: {
     *     // ... filter to delete one General
     *   }
     * })
     * 
    **/
    delete<T extends generalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, generalDeleteArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one General.
     * @param {generalUpdateArgs} args - Arguments to update one General.
     * @example
     * // Update one General
     * const general = await prisma.general.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends generalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, generalUpdateArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Generals.
     * @param {generalDeleteManyArgs} args - Arguments to filter Generals to delete.
     * @example
     * // Delete a few Generals
     * const { count } = await prisma.general.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends generalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, generalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generals
     * const general = await prisma.general.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends generalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, generalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one General.
     * @param {generalUpsertArgs} args - Arguments to update or create a General.
     * @example
     * // Update or create a General
     * const general = await prisma.general.upsert({
     *   create: {
     *     // ... data to create a General
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the General we want to update
     *   }
     * })
    **/
    upsert<T extends generalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, generalUpsertArgs<ExtArgs>>
    ): Prisma__generalClient<$Result.GetResult<Prisma.$generalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Generals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generalCountArgs} args - Arguments to filter Generals to count.
     * @example
     * // Count the number of Generals
     * const count = await prisma.general.count({
     *   where: {
     *     // ... the filter for the Generals we want to count
     *   }
     * })
    **/
    count<T extends generalCountArgs>(
      args?: Subset<T, generalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a General.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneralAggregateArgs>(args: Subset<T, GeneralAggregateArgs>): Prisma.PrismaPromise<GetGeneralAggregateType<T>>

    /**
     * Group by General.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {generalGroupByArgs} args - Group by arguments.
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
      T extends generalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: generalGroupByArgs['orderBy'] }
        : { orderBy?: generalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, generalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the general model
   */
  readonly fields: generalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for general.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__generalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the general model
   */ 
  interface generalFieldRefs {
    readonly id: FieldRef<"general", 'Int'>
    readonly type: FieldRef<"general", 'String'>
    readonly value: FieldRef<"general", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * general findUnique
   */
  export type generalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * Filter, which general to fetch.
     */
    where: generalWhereUniqueInput
  }


  /**
   * general findUniqueOrThrow
   */
  export type generalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * Filter, which general to fetch.
     */
    where: generalWhereUniqueInput
  }


  /**
   * general findFirst
   */
  export type generalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * Filter, which general to fetch.
     */
    where?: generalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generals to fetch.
     */
    orderBy?: generalOrderByWithRelationInput | generalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generals.
     */
    cursor?: generalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generals.
     */
    distinct?: GeneralScalarFieldEnum | GeneralScalarFieldEnum[]
  }


  /**
   * general findFirstOrThrow
   */
  export type generalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * Filter, which general to fetch.
     */
    where?: generalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generals to fetch.
     */
    orderBy?: generalOrderByWithRelationInput | generalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for generals.
     */
    cursor?: generalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of generals.
     */
    distinct?: GeneralScalarFieldEnum | GeneralScalarFieldEnum[]
  }


  /**
   * general findMany
   */
  export type generalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * Filter, which generals to fetch.
     */
    where?: generalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of generals to fetch.
     */
    orderBy?: generalOrderByWithRelationInput | generalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing generals.
     */
    cursor?: generalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` generals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` generals.
     */
    skip?: number
    distinct?: GeneralScalarFieldEnum | GeneralScalarFieldEnum[]
  }


  /**
   * general create
   */
  export type generalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * The data needed to create a general.
     */
    data: XOR<generalCreateInput, generalUncheckedCreateInput>
  }


  /**
   * general createMany
   */
  export type generalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many generals.
     */
    data: generalCreateManyInput | generalCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * general update
   */
  export type generalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * The data needed to update a general.
     */
    data: XOR<generalUpdateInput, generalUncheckedUpdateInput>
    /**
     * Choose, which general to update.
     */
    where: generalWhereUniqueInput
  }


  /**
   * general updateMany
   */
  export type generalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update generals.
     */
    data: XOR<generalUpdateManyMutationInput, generalUncheckedUpdateManyInput>
    /**
     * Filter which generals to update
     */
    where?: generalWhereInput
  }


  /**
   * general upsert
   */
  export type generalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * The filter to search for the general to update in case it exists.
     */
    where: generalWhereUniqueInput
    /**
     * In case the general found by the `where` argument doesn't exist, create a new general with this data.
     */
    create: XOR<generalCreateInput, generalUncheckedCreateInput>
    /**
     * In case the general was found with the provided `where` argument, update it with this data.
     */
    update: XOR<generalUpdateInput, generalUncheckedUpdateInput>
  }


  /**
   * general delete
   */
  export type generalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
    /**
     * Filter which general to delete.
     */
    where: generalWhereUniqueInput
  }


  /**
   * general deleteMany
   */
  export type generalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which generals to delete
     */
    where?: generalWhereInput
  }


  /**
   * general without action
   */
  export type generalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the general
     */
    select?: generalSelect<ExtArgs> | null
  }



  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    name: string
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Division?: boolean | Station$DivisionArgs<ExtArgs>
    Device?: boolean | Station$DeviceArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Division?: boolean | Station$DivisionArgs<ExtArgs>
    Device?: boolean | Station$DeviceArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      Division: Prisma.$DivisionPayload<ExtArgs>[]
      Device: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["station"]>
    composites: {}
  }


  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Station that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
    **/
    create<T extends StationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StationCreateArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stations.
     *     @param {StationCreateManyArgs} args - Arguments to create many Stations.
     *     @example
     *     // Create many Stations
     *     const station = await prisma.station.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
    **/
    delete<T extends StationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StationDeleteArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpdateArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
    **/
    upsert<T extends StationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpsertArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
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
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Division<T extends Station$DivisionArgs<ExtArgs> = {}>(args?: Subset<T, Station$DivisionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Device<T extends Station$DeviceArgs<ExtArgs> = {}>(args?: Subset<T, Station$DeviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Station model
   */ 
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly name: FieldRef<"Station", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }


  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
  }


  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }


  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
  }


  /**
   * Station.Division
   */
  export type Station$DivisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    cursor?: DivisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Station.Device
   */
  export type Station$DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }


  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
  }



  /**
   * Model Division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionAvgAggregateOutputType = {
    id: number | null
    stationId: number | null
  }

  export type DivisionSumAggregateOutputType = {
    id: number | null
    stationId: number | null
  }

  export type DivisionMinAggregateOutputType = {
    id: number | null
    stationId: number | null
    name: string | null
  }

  export type DivisionMaxAggregateOutputType = {
    id: number | null
    stationId: number | null
    name: string | null
  }

  export type DivisionCountAggregateOutputType = {
    id: number
    stationId: number
    name: number
    _all: number
  }


  export type DivisionAvgAggregateInputType = {
    id?: true
    stationId?: true
  }

  export type DivisionSumAggregateInputType = {
    id?: true
    stationId?: true
  }

  export type DivisionMinAggregateInputType = {
    id?: true
    stationId?: true
    name?: true
  }

  export type DivisionMaxAggregateInputType = {
    id?: true
    stationId?: true
    name?: true
  }

  export type DivisionCountAggregateInputType = {
    id?: true
    stationId?: true
    name?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Division to aggregate.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type DivisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithAggregationInput | DivisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: DivisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _avg?: DivisionAvgAggregateInputType
    _sum?: DivisionSumAggregateInputType
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    id: number
    stationId: number
    name: string
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends DivisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type DivisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    name?: boolean
    Station?: boolean | StationDefaultArgs<ExtArgs>
    Device?: boolean | Division$DeviceArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectScalar = {
    id?: boolean
    stationId?: boolean
    name?: boolean
  }

  export type DivisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Station?: boolean | StationDefaultArgs<ExtArgs>
    Device?: boolean | Division$DeviceArgs<ExtArgs>
    _count?: boolean | DivisionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DivisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Division"
    objects: {
      Station: Prisma.$StationPayload<ExtArgs>
      Device: Prisma.$DevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stationId: number
      name: string
    }, ExtArgs["result"]["division"]>
    composites: {}
  }


  type DivisionGetPayload<S extends boolean | null | undefined | DivisionDefaultArgs> = $Result.GetResult<Prisma.$DivisionPayload, S>

  type DivisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DivisionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface DivisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Division'], meta: { name: 'Division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {DivisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DivisionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionFindUniqueArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Division that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DivisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DivisionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DivisionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindFirstArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DivisionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DivisionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Division.
     * @param {DivisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
    **/
    create<T extends DivisionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionCreateArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Divisions.
     *     @param {DivisionCreateManyArgs} args - Arguments to create many Divisions.
     *     @example
     *     // Create many Divisions
     *     const division = await prisma.division.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DivisionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Division.
     * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
    **/
    delete<T extends DivisionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionDeleteArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Division.
     * @param {DivisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DivisionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionUpdateArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DivisionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DivisionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DivisionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Division.
     * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
    **/
    upsert<T extends DivisionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DivisionUpsertArgs<ExtArgs>>
    ): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionCountArgs>(
      args?: Subset<T, DivisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionGroupByArgs} args - Group by arguments.
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
      T extends DivisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionGroupByArgs['orderBy'] }
        : { orderBy?: DivisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Division model
   */
  readonly fields: DivisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Device<T extends Division$DeviceArgs<ExtArgs> = {}>(args?: Subset<T, Division$DeviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Division model
   */ 
  interface DivisionFieldRefs {
    readonly id: FieldRef<"Division", 'Int'>
    readonly stationId: FieldRef<"Division", 'Int'>
    readonly name: FieldRef<"Division", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Division findUnique
   */
  export type DivisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division findUniqueOrThrow
   */
  export type DivisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division findFirst
   */
  export type DivisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Division findFirstOrThrow
   */
  export type DivisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Division findMany
   */
  export type DivisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }


  /**
   * Division create
   */
  export type DivisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Division.
     */
    data: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
  }


  /**
   * Division createMany
   */
  export type DivisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Division update
   */
  export type DivisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Division.
     */
    data: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
    /**
     * Choose, which Division to update.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division updateMany
   */
  export type DivisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
  }


  /**
   * Division upsert
   */
  export type DivisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Division to update in case it exists.
     */
    where: DivisionWhereUniqueInput
    /**
     * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
     */
    create: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
    /**
     * In case the Division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
  }


  /**
   * Division delete
   */
  export type DivisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
    /**
     * Filter which Division to delete.
     */
    where: DivisionWhereUniqueInput
  }


  /**
   * Division deleteMany
   */
  export type DivisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionWhereInput
  }


  /**
   * Division.Device
   */
  export type Division$DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }


  /**
   * Division without action
   */
  export type DivisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DivisionInclude<ExtArgs> | null
  }



  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    type: number | null
    stationId: number | null
    divisionId: number | null
    pathId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    type: number | null
    stationId: number | null
    divisionId: number | null
    pathId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    xmlId: string | null
    name: string | null
    type: number | null
    stationId: number | null
    divisionId: number | null
    pathId: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    xmlId: string | null
    name: string | null
    type: number | null
    stationId: number | null
    divisionId: number | null
    pathId: number | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    xmlId: number
    name: number
    type: number
    stationId: number
    divisionId: number
    pathId: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    type?: true
    stationId?: true
    divisionId?: true
    pathId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    type?: true
    stationId?: true
    divisionId?: true
    pathId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    xmlId?: true
    name?: true
    type?: true
    stationId?: true
    divisionId?: true
    pathId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    xmlId?: true
    name?: true
    type?: true
    stationId?: true
    divisionId?: true
    pathId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    xmlId?: true
    name?: true
    type?: true
    stationId?: true
    divisionId?: true
    pathId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    xmlId: string
    name: string
    type: number
    stationId: number
    divisionId: number
    pathId: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    xmlId?: boolean
    name?: boolean
    type?: boolean
    stationId?: boolean
    divisionId?: boolean
    pathId?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
    division?: boolean | DivisionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    xmlId?: boolean
    name?: boolean
    type?: boolean
    stationId?: boolean
    divisionId?: boolean
    pathId?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
    division?: boolean | DivisionDefaultArgs<ExtArgs>
  }


  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
      division: Prisma.$DivisionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      xmlId: string
      name: string
      type: number
      stationId: number
      divisionId: number
      pathId: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }


  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
    **/
    create<T extends DeviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Devices.
     *     @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     *     @example
     *     // Create many Devices
     *     const device = await prisma.device.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
    **/
    delete<T extends DeviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
    **/
    upsert<T extends DeviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>
    ): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    division<T extends DivisionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DivisionDefaultArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly xmlId: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'Int'>
    readonly stationId: FieldRef<"Device", 'Int'>
    readonly divisionId: FieldRef<"Device", 'Int'>
    readonly pathId: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }


  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }


  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }


  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }


  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }


  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }


  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }


  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }


  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }


  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }


  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }


  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceInclude<ExtArgs> | null
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


  export const GeneralScalarFieldEnum: {
    id: 'id',
    type: 'type',
    value: 'value'
  };

  export type GeneralScalarFieldEnum = (typeof GeneralScalarFieldEnum)[keyof typeof GeneralScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const DivisionScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId',
    name: 'name'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    xmlId: 'xmlId',
    name: 'name',
    type: 'type',
    stationId: 'stationId',
    divisionId: 'divisionId',
    pathId: 'pathId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type generalWhereInput = {
    AND?: generalWhereInput | generalWhereInput[]
    OR?: generalWhereInput[]
    NOT?: generalWhereInput | generalWhereInput[]
    id?: IntFilter<"general"> | number
    type?: StringFilter<"general"> | string
    value?: JsonNullableFilter<"general">
  }

  export type generalOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type generalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    type?: string
    AND?: generalWhereInput | generalWhereInput[]
    OR?: generalWhereInput[]
    NOT?: generalWhereInput | generalWhereInput[]
    value?: JsonNullableFilter<"general">
  }, "id" | "type">

  export type generalOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: generalCountOrderByAggregateInput
    _avg?: generalAvgOrderByAggregateInput
    _max?: generalMaxOrderByAggregateInput
    _min?: generalMinOrderByAggregateInput
    _sum?: generalSumOrderByAggregateInput
  }

  export type generalScalarWhereWithAggregatesInput = {
    AND?: generalScalarWhereWithAggregatesInput | generalScalarWhereWithAggregatesInput[]
    OR?: generalScalarWhereWithAggregatesInput[]
    NOT?: generalScalarWhereWithAggregatesInput | generalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"general"> | number
    type?: StringWithAggregatesFilter<"general"> | string
    value?: JsonNullableWithAggregatesFilter<"general">
  }

  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    name?: StringFilter<"Station"> | string
    Division?: DivisionListRelationFilter
    Device?: DeviceListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Division?: DivisionOrderByRelationAggregateInput
    Device?: DeviceOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    Division?: DivisionListRelationFilter
    Device?: DeviceListRelationFilter
  }, "id" | "name">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    name?: StringWithAggregatesFilter<"Station"> | string
  }

  export type DivisionWhereInput = {
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    id?: IntFilter<"Division"> | number
    stationId?: IntFilter<"Division"> | number
    name?: StringFilter<"Division"> | string
    Station?: XOR<StationRelationFilter, StationWhereInput>
    Device?: DeviceListRelationFilter
  }

  export type DivisionOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    name?: SortOrder
    Station?: StationOrderByWithRelationInput
    Device?: DeviceOrderByRelationAggregateInput
  }

  export type DivisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    stationId?: IntFilter<"Division"> | number
    name?: StringFilter<"Division"> | string
    Station?: XOR<StationRelationFilter, StationWhereInput>
    Device?: DeviceListRelationFilter
  }, "id">

  export type DivisionOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    name?: SortOrder
    _count?: DivisionCountOrderByAggregateInput
    _avg?: DivisionAvgOrderByAggregateInput
    _max?: DivisionMaxOrderByAggregateInput
    _min?: DivisionMinOrderByAggregateInput
    _sum?: DivisionSumOrderByAggregateInput
  }

  export type DivisionScalarWhereWithAggregatesInput = {
    AND?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    OR?: DivisionScalarWhereWithAggregatesInput[]
    NOT?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Division"> | number
    stationId?: IntWithAggregatesFilter<"Division"> | number
    name?: StringWithAggregatesFilter<"Division"> | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    xmlId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    type?: IntFilter<"Device"> | number
    stationId?: IntFilter<"Device"> | number
    divisionId?: IntFilter<"Device"> | number
    pathId?: IntFilter<"Device"> | number
    station?: XOR<StationRelationFilter, StationWhereInput>
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    xmlId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
    station?: StationOrderByWithRelationInput
    division?: DivisionOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    xmlId?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    type?: IntFilter<"Device"> | number
    stationId?: IntFilter<"Device"> | number
    divisionId?: IntFilter<"Device"> | number
    pathId?: IntFilter<"Device"> | number
    station?: XOR<StationRelationFilter, StationWhereInput>
    division?: XOR<DivisionRelationFilter, DivisionWhereInput>
  }, "id" | "xmlId">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    xmlId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    xmlId?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    type?: IntWithAggregatesFilter<"Device"> | number
    stationId?: IntWithAggregatesFilter<"Device"> | number
    divisionId?: IntWithAggregatesFilter<"Device"> | number
    pathId?: IntWithAggregatesFilter<"Device"> | number
  }

  export type generalCreateInput = {
    type: string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type generalUncheckedCreateInput = {
    id?: number
    type: string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type generalUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type generalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type generalCreateManyInput = {
    id?: number
    type: string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type generalUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type generalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StationCreateInput = {
    name: string
    Division?: DivisionCreateNestedManyWithoutStationInput
    Device?: DeviceCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    name: string
    Division?: DivisionUncheckedCreateNestedManyWithoutStationInput
    Device?: DeviceUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Division?: DivisionUpdateManyWithoutStationNestedInput
    Device?: DeviceUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Division?: DivisionUncheckedUpdateManyWithoutStationNestedInput
    Device?: DeviceUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    name: string
  }

  export type StationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DivisionCreateInput = {
    name: string
    Station: StationCreateNestedOneWithoutDivisionInput
    Device?: DeviceCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateInput = {
    id?: number
    stationId: number
    name: string
    Device?: DeviceUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Station?: StationUpdateOneRequiredWithoutDivisionNestedInput
    Device?: DeviceUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Device?: DeviceUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionCreateManyInput = {
    id?: number
    stationId: number
    name: string
  }

  export type DivisionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DivisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateInput = {
    xmlId: string
    name: string
    type: number
    pathId: number
    station: StationCreateNestedOneWithoutDeviceInput
    division: DivisionCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    xmlId: string
    name: string
    type: number
    stationId: number
    divisionId: number
    pathId: number
  }

  export type DeviceUpdateInput = {
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
    station?: StationUpdateOneRequiredWithoutDeviceNestedInput
    division?: DivisionUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateManyInput = {
    id?: number
    xmlId: string
    name: string
    type: number
    stationId: number
    divisionId: number
    pathId: number
  }

  export type DeviceUpdateManyMutationInput = {
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type generalCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type generalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type generalMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type generalMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type generalSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DivisionListRelationFilter = {
    every?: DivisionWhereInput
    some?: DivisionWhereInput
    none?: DivisionWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type DivisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StationRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type DivisionCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    name?: SortOrder
  }

  export type DivisionAvgOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
  }

  export type DivisionMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    name?: SortOrder
  }

  export type DivisionMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    name?: SortOrder
  }

  export type DivisionSumOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
  }

  export type DivisionRelationFilter = {
    is?: DivisionWhereInput
    isNot?: DivisionWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    xmlId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    xmlId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    xmlId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    stationId?: SortOrder
    divisionId?: SortOrder
    pathId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DivisionCreateNestedManyWithoutStationInput = {
    create?: XOR<DivisionCreateWithoutStationInput, DivisionUncheckedCreateWithoutStationInput> | DivisionCreateWithoutStationInput[] | DivisionUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DivisionCreateOrConnectWithoutStationInput | DivisionCreateOrConnectWithoutStationInput[]
    createMany?: DivisionCreateManyStationInputEnvelope
    connect?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutStationInput = {
    create?: XOR<DeviceCreateWithoutStationInput, DeviceUncheckedCreateWithoutStationInput> | DeviceCreateWithoutStationInput[] | DeviceUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutStationInput | DeviceCreateOrConnectWithoutStationInput[]
    createMany?: DeviceCreateManyStationInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DivisionUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<DivisionCreateWithoutStationInput, DivisionUncheckedCreateWithoutStationInput> | DivisionCreateWithoutStationInput[] | DivisionUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DivisionCreateOrConnectWithoutStationInput | DivisionCreateOrConnectWithoutStationInput[]
    createMany?: DivisionCreateManyStationInputEnvelope
    connect?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<DeviceCreateWithoutStationInput, DeviceUncheckedCreateWithoutStationInput> | DeviceCreateWithoutStationInput[] | DeviceUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutStationInput | DeviceCreateOrConnectWithoutStationInput[]
    createMany?: DeviceCreateManyStationInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DivisionUpdateManyWithoutStationNestedInput = {
    create?: XOR<DivisionCreateWithoutStationInput, DivisionUncheckedCreateWithoutStationInput> | DivisionCreateWithoutStationInput[] | DivisionUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DivisionCreateOrConnectWithoutStationInput | DivisionCreateOrConnectWithoutStationInput[]
    upsert?: DivisionUpsertWithWhereUniqueWithoutStationInput | DivisionUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: DivisionCreateManyStationInputEnvelope
    set?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    disconnect?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    delete?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    connect?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    update?: DivisionUpdateWithWhereUniqueWithoutStationInput | DivisionUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: DivisionUpdateManyWithWhereWithoutStationInput | DivisionUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: DivisionScalarWhereInput | DivisionScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutStationNestedInput = {
    create?: XOR<DeviceCreateWithoutStationInput, DeviceUncheckedCreateWithoutStationInput> | DeviceCreateWithoutStationInput[] | DeviceUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutStationInput | DeviceCreateOrConnectWithoutStationInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutStationInput | DeviceUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: DeviceCreateManyStationInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutStationInput | DeviceUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutStationInput | DeviceUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DivisionUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<DivisionCreateWithoutStationInput, DivisionUncheckedCreateWithoutStationInput> | DivisionCreateWithoutStationInput[] | DivisionUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DivisionCreateOrConnectWithoutStationInput | DivisionCreateOrConnectWithoutStationInput[]
    upsert?: DivisionUpsertWithWhereUniqueWithoutStationInput | DivisionUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: DivisionCreateManyStationInputEnvelope
    set?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    disconnect?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    delete?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    connect?: DivisionWhereUniqueInput | DivisionWhereUniqueInput[]
    update?: DivisionUpdateWithWhereUniqueWithoutStationInput | DivisionUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: DivisionUpdateManyWithWhereWithoutStationInput | DivisionUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: DivisionScalarWhereInput | DivisionScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<DeviceCreateWithoutStationInput, DeviceUncheckedCreateWithoutStationInput> | DeviceCreateWithoutStationInput[] | DeviceUncheckedCreateWithoutStationInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutStationInput | DeviceCreateOrConnectWithoutStationInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutStationInput | DeviceUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: DeviceCreateManyStationInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutStationInput | DeviceUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutStationInput | DeviceUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutDivisionInput = {
    create?: XOR<StationCreateWithoutDivisionInput, StationUncheckedCreateWithoutDivisionInput>
    connectOrCreate?: StationCreateOrConnectWithoutDivisionInput
    connect?: StationWhereUniqueInput
  }

  export type DeviceCreateNestedManyWithoutDivisionInput = {
    create?: XOR<DeviceCreateWithoutDivisionInput, DeviceUncheckedCreateWithoutDivisionInput> | DeviceCreateWithoutDivisionInput[] | DeviceUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutDivisionInput | DeviceCreateOrConnectWithoutDivisionInput[]
    createMany?: DeviceCreateManyDivisionInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutDivisionInput = {
    create?: XOR<DeviceCreateWithoutDivisionInput, DeviceUncheckedCreateWithoutDivisionInput> | DeviceCreateWithoutDivisionInput[] | DeviceUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutDivisionInput | DeviceCreateOrConnectWithoutDivisionInput[]
    createMany?: DeviceCreateManyDivisionInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StationUpdateOneRequiredWithoutDivisionNestedInput = {
    create?: XOR<StationCreateWithoutDivisionInput, StationUncheckedCreateWithoutDivisionInput>
    connectOrCreate?: StationCreateOrConnectWithoutDivisionInput
    upsert?: StationUpsertWithoutDivisionInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutDivisionInput, StationUpdateWithoutDivisionInput>, StationUncheckedUpdateWithoutDivisionInput>
  }

  export type DeviceUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<DeviceCreateWithoutDivisionInput, DeviceUncheckedCreateWithoutDivisionInput> | DeviceCreateWithoutDivisionInput[] | DeviceUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutDivisionInput | DeviceCreateOrConnectWithoutDivisionInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutDivisionInput | DeviceUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: DeviceCreateManyDivisionInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutDivisionInput | DeviceUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutDivisionInput | DeviceUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutDivisionNestedInput = {
    create?: XOR<DeviceCreateWithoutDivisionInput, DeviceUncheckedCreateWithoutDivisionInput> | DeviceCreateWithoutDivisionInput[] | DeviceUncheckedCreateWithoutDivisionInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutDivisionInput | DeviceCreateOrConnectWithoutDivisionInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutDivisionInput | DeviceUpsertWithWhereUniqueWithoutDivisionInput[]
    createMany?: DeviceCreateManyDivisionInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutDivisionInput | DeviceUpdateWithWhereUniqueWithoutDivisionInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutDivisionInput | DeviceUpdateManyWithWhereWithoutDivisionInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutDeviceInput = {
    create?: XOR<StationCreateWithoutDeviceInput, StationUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: StationCreateOrConnectWithoutDeviceInput
    connect?: StationWhereUniqueInput
  }

  export type DivisionCreateNestedOneWithoutDeviceInput = {
    create?: XOR<DivisionCreateWithoutDeviceInput, DivisionUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutDeviceInput
    connect?: DivisionWhereUniqueInput
  }

  export type StationUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<StationCreateWithoutDeviceInput, StationUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: StationCreateOrConnectWithoutDeviceInput
    upsert?: StationUpsertWithoutDeviceInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutDeviceInput, StationUpdateWithoutDeviceInput>, StationUncheckedUpdateWithoutDeviceInput>
  }

  export type DivisionUpdateOneRequiredWithoutDeviceNestedInput = {
    create?: XOR<DivisionCreateWithoutDeviceInput, DivisionUncheckedCreateWithoutDeviceInput>
    connectOrCreate?: DivisionCreateOrConnectWithoutDeviceInput
    upsert?: DivisionUpsertWithoutDeviceInput
    connect?: DivisionWhereUniqueInput
    update?: XOR<XOR<DivisionUpdateToOneWithWhereWithoutDeviceInput, DivisionUpdateWithoutDeviceInput>, DivisionUncheckedUpdateWithoutDeviceInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DivisionCreateWithoutStationInput = {
    name: string
    Device?: DeviceCreateNestedManyWithoutDivisionInput
  }

  export type DivisionUncheckedCreateWithoutStationInput = {
    id?: number
    name: string
    Device?: DeviceUncheckedCreateNestedManyWithoutDivisionInput
  }

  export type DivisionCreateOrConnectWithoutStationInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutStationInput, DivisionUncheckedCreateWithoutStationInput>
  }

  export type DivisionCreateManyStationInputEnvelope = {
    data: DivisionCreateManyStationInput | DivisionCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutStationInput = {
    xmlId: string
    name: string
    type: number
    pathId: number
    division: DivisionCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutStationInput = {
    id?: number
    xmlId: string
    name: string
    type: number
    divisionId: number
    pathId: number
  }

  export type DeviceCreateOrConnectWithoutStationInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutStationInput, DeviceUncheckedCreateWithoutStationInput>
  }

  export type DeviceCreateManyStationInputEnvelope = {
    data: DeviceCreateManyStationInput | DeviceCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type DivisionUpsertWithWhereUniqueWithoutStationInput = {
    where: DivisionWhereUniqueInput
    update: XOR<DivisionUpdateWithoutStationInput, DivisionUncheckedUpdateWithoutStationInput>
    create: XOR<DivisionCreateWithoutStationInput, DivisionUncheckedCreateWithoutStationInput>
  }

  export type DivisionUpdateWithWhereUniqueWithoutStationInput = {
    where: DivisionWhereUniqueInput
    data: XOR<DivisionUpdateWithoutStationInput, DivisionUncheckedUpdateWithoutStationInput>
  }

  export type DivisionUpdateManyWithWhereWithoutStationInput = {
    where: DivisionScalarWhereInput
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyWithoutStationInput>
  }

  export type DivisionScalarWhereInput = {
    AND?: DivisionScalarWhereInput | DivisionScalarWhereInput[]
    OR?: DivisionScalarWhereInput[]
    NOT?: DivisionScalarWhereInput | DivisionScalarWhereInput[]
    id?: IntFilter<"Division"> | number
    stationId?: IntFilter<"Division"> | number
    name?: StringFilter<"Division"> | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutStationInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutStationInput, DeviceUncheckedUpdateWithoutStationInput>
    create: XOR<DeviceCreateWithoutStationInput, DeviceUncheckedCreateWithoutStationInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutStationInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutStationInput, DeviceUncheckedUpdateWithoutStationInput>
  }

  export type DeviceUpdateManyWithWhereWithoutStationInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutStationInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    xmlId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    type?: IntFilter<"Device"> | number
    stationId?: IntFilter<"Device"> | number
    divisionId?: IntFilter<"Device"> | number
    pathId?: IntFilter<"Device"> | number
  }

  export type StationCreateWithoutDivisionInput = {
    name: string
    Device?: DeviceCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutDivisionInput = {
    id?: number
    name: string
    Device?: DeviceUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutDivisionInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutDivisionInput, StationUncheckedCreateWithoutDivisionInput>
  }

  export type DeviceCreateWithoutDivisionInput = {
    xmlId: string
    name: string
    type: number
    pathId: number
    station: StationCreateNestedOneWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutDivisionInput = {
    id?: number
    xmlId: string
    name: string
    type: number
    stationId: number
    pathId: number
  }

  export type DeviceCreateOrConnectWithoutDivisionInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDivisionInput, DeviceUncheckedCreateWithoutDivisionInput>
  }

  export type DeviceCreateManyDivisionInputEnvelope = {
    data: DeviceCreateManyDivisionInput | DeviceCreateManyDivisionInput[]
    skipDuplicates?: boolean
  }

  export type StationUpsertWithoutDivisionInput = {
    update: XOR<StationUpdateWithoutDivisionInput, StationUncheckedUpdateWithoutDivisionInput>
    create: XOR<StationCreateWithoutDivisionInput, StationUncheckedCreateWithoutDivisionInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutDivisionInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutDivisionInput, StationUncheckedUpdateWithoutDivisionInput>
  }

  export type StationUpdateWithoutDivisionInput = {
    name?: StringFieldUpdateOperationsInput | string
    Device?: DeviceUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Device?: DeviceUncheckedUpdateManyWithoutStationNestedInput
  }

  export type DeviceUpsertWithWhereUniqueWithoutDivisionInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutDivisionInput, DeviceUncheckedUpdateWithoutDivisionInput>
    create: XOR<DeviceCreateWithoutDivisionInput, DeviceUncheckedCreateWithoutDivisionInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutDivisionInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutDivisionInput, DeviceUncheckedUpdateWithoutDivisionInput>
  }

  export type DeviceUpdateManyWithWhereWithoutDivisionInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutDivisionInput>
  }

  export type StationCreateWithoutDeviceInput = {
    name: string
    Division?: DivisionCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutDeviceInput = {
    id?: number
    name: string
    Division?: DivisionUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutDeviceInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutDeviceInput, StationUncheckedCreateWithoutDeviceInput>
  }

  export type DivisionCreateWithoutDeviceInput = {
    name: string
    Station: StationCreateNestedOneWithoutDivisionInput
  }

  export type DivisionUncheckedCreateWithoutDeviceInput = {
    id?: number
    stationId: number
    name: string
  }

  export type DivisionCreateOrConnectWithoutDeviceInput = {
    where: DivisionWhereUniqueInput
    create: XOR<DivisionCreateWithoutDeviceInput, DivisionUncheckedCreateWithoutDeviceInput>
  }

  export type StationUpsertWithoutDeviceInput = {
    update: XOR<StationUpdateWithoutDeviceInput, StationUncheckedUpdateWithoutDeviceInput>
    create: XOR<StationCreateWithoutDeviceInput, StationUncheckedCreateWithoutDeviceInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutDeviceInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutDeviceInput, StationUncheckedUpdateWithoutDeviceInput>
  }

  export type StationUpdateWithoutDeviceInput = {
    name?: StringFieldUpdateOperationsInput | string
    Division?: DivisionUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Division?: DivisionUncheckedUpdateManyWithoutStationNestedInput
  }

  export type DivisionUpsertWithoutDeviceInput = {
    update: XOR<DivisionUpdateWithoutDeviceInput, DivisionUncheckedUpdateWithoutDeviceInput>
    create: XOR<DivisionCreateWithoutDeviceInput, DivisionUncheckedCreateWithoutDeviceInput>
    where?: DivisionWhereInput
  }

  export type DivisionUpdateToOneWithWhereWithoutDeviceInput = {
    where?: DivisionWhereInput
    data: XOR<DivisionUpdateWithoutDeviceInput, DivisionUncheckedUpdateWithoutDeviceInput>
  }

  export type DivisionUpdateWithoutDeviceInput = {
    name?: StringFieldUpdateOperationsInput | string
    Station?: StationUpdateOneRequiredWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DivisionCreateManyStationInput = {
    id?: number
    name: string
  }

  export type DeviceCreateManyStationInput = {
    id?: number
    xmlId: string
    name: string
    type: number
    divisionId: number
    pathId: number
  }

  export type DivisionUpdateWithoutStationInput = {
    name?: StringFieldUpdateOperationsInput | string
    Device?: DeviceUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Device?: DeviceUncheckedUpdateManyWithoutDivisionNestedInput
  }

  export type DivisionUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUpdateWithoutStationInput = {
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
    division?: DivisionUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    divisionId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateManyDivisionInput = {
    id?: number
    xmlId: string
    name: string
    type: number
    stationId: number
    pathId: number
  }

  export type DeviceUpdateWithoutDivisionInput = {
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
    station?: StationUpdateOneRequiredWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceUncheckedUpdateManyWithoutDivisionInput = {
    id?: IntFieldUpdateOperationsInput | number
    xmlId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StationCountOutputTypeDefaultArgs instead
     */
    export type StationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionCountOutputTypeDefaultArgs instead
     */
    export type DivisionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use generalDefaultArgs instead
     */
    export type generalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = generalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StationDefaultArgs instead
     */
    export type StationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DivisionDefaultArgs instead
     */
    export type DivisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DivisionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>

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